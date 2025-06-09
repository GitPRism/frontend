import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PortfolioTitleForm from "@/components/common/portfolio/PortfolioTitleForm";
import EditPortfolioContent from "@/components/common/portfolio/EditPortfolioContent";
import RegisterBtn from "@/components/common/portfolio/RegisterBtn";

import { useAuthStore } from "@/store/useAuthStore";
import { useWebSocket } from "@/hooks/portfolio/socket/useWebSocket";

import { getDetailPortfolio } from "@/services/Portfolio/getDetailPortfolio";

import apiClient from "@/services/apiClient";

function PortfolioEditor() {
  const { id } = useParams();
  const portfolioId = Number(id);
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("제목을 입력해주세요");
  const [contents, setContents] = useState<any[]>([]);
  const [lastEditedField, setLastEditedField] = useState<string | null>(null);

  useEffect(() => {
    async function getPortfolio() {
      const data = await getDetailPortfolio(portfolioId);
      console.log("📦 원본 포트폴리오 데이터:", data);

      if (!data) {
        console.error("❌ 포트폴리오 데이터를 가져오지 못했습니다.");
        return;
      }

      setTitle(data.title);

      if (data.data) {
        // 각 컨텐츠에 부모 portfolioId 추가
        const contentsWithParentId = data.data.map((content: any) => {
          console.log("📝 컨텐츠 처리:", {
            content,
            parentPortfolioId: data.portfolioId,
          });

          return {
            ...content,
            parentPortfolioId: data.portfolioId, // 부모 portfolioId 추가
            tempId: undefined, // tempId 제거
          };
        });

        console.log("📦 처리된 컨텐츠 데이터:", {
          originalPortfolioId: data.portfolioId,
          contents: contentsWithParentId,
        });

        setContents(contentsWithParentId);
      }
    }
    getPortfolio();
  }, [portfolioId]);

  // websocket 연결 정보
  // const portfolioId = data?.combinedPortfolioId; // 받아올 예정
  const editorId = useAuthStore((state) => state.userId);
  const editorName = useAuthStore((state) => state.username);

  const [activeUsers, setActiveUsers] = useState<string[]>([]);
  const [typingUsers, setTypingUsers] = useState<Set<string>>(new Set());
  const typingTimeoutRef = useRef<{ [key: string]: NodeJS.Timeout }>({});
  const typingDebounceRef = useRef<NodeJS.Timeout | null>(null);

  const handleContentUpdate = useCallback(
    (data: any) => {
      console.log("📩 수신된 데이터 (전체):", JSON.stringify(data, null, 2));
      console.log("📩 수신된 데이터 필드:", data.field);
      console.log("📩 수신된 데이터 컨텐츠:", data.content);
      console.log("📩 수신된 데이터 포트폴리오ID:", data.portfolioId);
      console.log("📩 마지막 수정 필드:", lastEditedField);

      // field가 없으면 마지막 수정 필드 사용
      const fieldToUpdate = data.field || lastEditedField;

      if (fieldToUpdate === "title" || fieldToUpdate === "description") {
        console.log("🔄 컨텐츠 업데이트:", {
          field: fieldToUpdate,
          content: data.content,
          usingLastEditedField: !data.field,
        });

        setContents((prevContents) => {
          const updatedContents = prevContents.map((content) => ({
            ...content,
            [fieldToUpdate]: data.content,
          }));
          console.log("🔄 업데이트된 컨텐츠:", updatedContents);
          return updatedContents;
        });
      } else {
        console.log("⚠️ 알 수 없는 필드:", fieldToUpdate);
      }
    },
    [lastEditedField]
  );

  const handleTypingUpdate = useCallback(
    (data: any) => {
      // 자신의 타이핑 상태도 표시하도록 수정
      console.log("✏️ 타이핑 상태 수신:", data);

      const editorName = data.editorName || `에디터 ${data.editorId}`;
      setTypingUsers((prev) => {
        const newSet = new Set(prev);
        newSet.add(editorName);
        return newSet;
      });

      // 타이핑 상태 2초 후 제거
      if (typingTimeoutRef.current[editorName]) {
        clearTimeout(typingTimeoutRef.current[editorName]);
      }
      typingTimeoutRef.current[editorName] = setTimeout(() => {
        setTypingUsers((prev) => {
          const newSet = new Set(prev);
          newSet.delete(editorName);
          return newSet;
        });
      }, 2000);
    },
    [] // editorId 의존성 제거
  );

  const handleActiveUsersUpdate = useCallback((users: string[]) => {
    console.log("👥 활성 사용자 업데이트:", users); // 디버깅용 로그 추가
    setActiveUsers(users);
  }, []);

  const { sendEditMessage, sendTypingStatus, isConnected } = useWebSocket({
    portfolioId,
    editorId,
    editorName,
    onContentUpdate: handleContentUpdate,
    onTypingUpdate: handleTypingUpdate,
    onActiveUsersUpdate: handleActiveUsersUpdate,
  });

  // 웹소켓 연결 상태 모니터링
  useEffect(() => {
    console.log("🔌 웹소켓 연결 상태:", {
      isConnected,
      portfolioId,
      editorId,
      editorName,
    });
  }, [isConnected, portfolioId, editorId, editorName]);

  // 타이핑 상태 전송 (디바운스 적용)
  const handleTyping = useCallback(() => {
    if (!isConnected) return;

    if (typingDebounceRef.current) {
      clearTimeout(typingDebounceRef.current);
    }

    typingDebounceRef.current = setTimeout(() => {
      sendTypingStatus(true);
    }, 300);
  }, [isConnected, sendTypingStatus]);

  // 편집 내용 전송
  const handleEdit = useCallback(
    (field: string, content: string) => {
      if (!isConnected) {
        console.log("❌ 웹소켓 연결이 없습니다.");
        return;
      }

      // 마지막 수정 필드 저장
      setLastEditedField(field);

      console.log("📤 전송 시도:", {
        field,
        content,
        portfolioId,
        editorId,
        editorName,
        lastEditedField,
      });
      sendEditMessage(field, content);
    },
    [isConnected, sendEditMessage, portfolioId, editorId, editorName]
  );

  return (
    // 포트폴리오 소켓 수정 페이지
    <div className="flex flex-col gap-4 max-w-3xl mx-auto text-black mt-6">
      {activeUsers.length > 0 && (
        <div className="bg-blue-50 p-2 rounded text-sm">
          👥 현재 접속 중: {activeUsers.join(", ")}
        </div>
      )}

      {typingUsers.size > 0 && (
        <div className="text-gray-500 text-sm">
          ✏️ {Array.from(typingUsers).join(", ")}님이 입력 중입니다...
        </div>
      )}

      <PortfolioTitleForm
        title={title}
        onTitleChange={(value) => {
          setTitle(value);
          // 소켓 사용하지 않고 직접 상태만 업데이트
        }}
        repoId={portfolioId}
      />

      <div className="bg-white">
        {contents.map((data: any) => {
          console.log("🎯 렌더링할 컨텐츠:", {
            ...data,
            parentPortfolioId: portfolioId,
          });

          return (
            <EditPortfolioContent
              key={data.portfolioId}
              id={data.portfolioId}
              titleData={data.title}
              descriptionData={data.description}
              repoId={portfolioId}
              onEdit={(field, value) => {
                console.log("📝 컨텐츠 편집:", {
                  field,
                  value,
                  portfolioId,
                  content: data,
                });

                // title과 description만 소켓으로 전송
                handleEdit(field, value);
                handleTyping();
              }}
            />
          );
        })}
        <div className="border-b border-gray-200"></div>
      </div>

      <RegisterBtn
        onClick={() => {
          apiClient
            .post(`/api/v1/portfolios/${portfolioId}/commit-draft`)
            .then(() => {
              navigate("/home");
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        DB에 등록하기
      </RegisterBtn>
    </div>
  );
}

export default PortfolioEditor;

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
  const [response, setResponse] = useState<any>(null);
  const [title, setTitle] = useState<string>("제목을 입력해주세요");

  useEffect(() => {
    async function getPortfolio() {
      const data = await getDetailPortfolio(portfolioId);
      console.log(data);
      setResponse(data);
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
      if (data.editorId === editorId) return; // 자신의 메시지는 무시

      // 데이터 업데이트 로직
      if (data.field === "title") {
        setTitle(data.content);
      }
      // description 업데이트는 EditPortfolioContent 컴포넌트에서 처리
    },
    [editorId]
  );

  const handleTypingUpdate = useCallback(
    (data: any) => {
      if (data.editorId === editorId) return;

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
    [editorId]
  );

  const handleActiveUsersUpdate = useCallback((users: string[]) => {
    setActiveUsers(users);
  }, []);

  const { sendEditMessage, sendTypingStatus } = useWebSocket({
    portfolioId,
    editorId,
    editorName,
    onContentUpdate: handleContentUpdate,
    onTypingUpdate: handleTypingUpdate,
    onActiveUsersUpdate: handleActiveUsersUpdate,
  });

  // 타이핑 상태 전송 (디바운스 적용)
  const handleTyping = () => {
    if (typingDebounceRef.current) {
      clearTimeout(typingDebounceRef.current);
    }

    typingDebounceRef.current = setTimeout(() => {
      sendTypingStatus(true);
    }, 300);
  };

  // 편집 내용 전송
  const handleEdit = (field: string, content: string) => {
    sendEditMessage(field, content);
  };

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
          handleEdit("title", value);
          handleTyping();
        }}
        repoId={portfolioId}
      />

      <div className="bg-white">
        <EditPortfolioContent
          titleData={response?.title || ""}
          descriptionData={response?.description}
          onEdit={(field, value) => {
            handleEdit(field, value);
            handleTyping();
          }}
        />
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

import { useEffect, useRef, useCallback, useState } from "react";
import { Client, StompSubscription } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { useAuthStore } from "@/store/useAuthStore";

interface WebSocketProps {
  portfolioId?: number;
  editorId?: number;
  editorName?: string;
  onContentUpdate?: (data: any) => void;
  onTypingUpdate?: (data: any) => void;
  onActiveUsersUpdate?: (users: string[]) => void;
}

interface ExtendedClient extends Client {
  subscriptions?: StompSubscription[];
}

export function useWebSocket({
  portfolioId,
  editorId,
  editorName,
  onContentUpdate,
  onTypingUpdate,
  onActiveUsersUpdate,
}: WebSocketProps) {
  const clientRef = useRef<ExtendedClient | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const connectingRef = useRef(false);
  const callbacksRef = useRef({
    onContentUpdate,
    onTypingUpdate,
    onActiveUsersUpdate,
  });
  const { token } = useAuthStore();

  // 콜백 함수들을 ref에 저장하여 의존성 배열에서 제외
  useEffect(() => {
    callbacksRef.current = {
      onContentUpdate,
      onTypingUpdate,
      onActiveUsersUpdate,
    };
  }, [onContentUpdate, onTypingUpdate, onActiveUsersUpdate]);

  const connectWebSocket = useCallback(() => {
    if (!portfolioId || !editorId || !editorName || connectingRef.current)
      return;

    connectingRef.current = true;
    console.log("웹소켓 연결 시도:", { portfolioId, editorId, editorName });

    const socket = new SockJS(`http://localhost:8080/ws/edit?token=${token}`);

    const client = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      debug: (str) => {
        // 디버그 로그는 개발 환경에서만 출력
        if (process.env.NODE_ENV === "development") {
          console.log("STOMP Debug:", str);
        }
      },
      onConnect: () => {
        console.log("✅ WebSocket 연결 성공");
        setIsConnected(true);
        connectingRef.current = false;

        // 구독 설정
        const subscriptions = [
          client.subscribe(`/topic/portfolio.${portfolioId}`, (message) => {
            const data = JSON.parse(message.body);
            console.log("📥 메시지 수신 (portfolio):", {
              topic: `/topic/portfolio.${portfolioId}`,
              data,
              editorId,
              editorName,
              subscriptionId: message.headers["subscription"],
              messageId: message.headers["message-id"],
            });
            callbacksRef.current.onContentUpdate?.(data);
          }),
          client.subscribe(`/topic/typing.${portfolioId}`, (message) => {
            const data = JSON.parse(message.body);
            console.log("📥 메시지 수신 (typing):", {
              topic: `/topic/typing.${portfolioId}`,
              data,
              editorId,
              editorName,
            });
            callbacksRef.current.onTypingUpdate?.(data);
          }),
          client.subscribe(`/topic/active.${portfolioId}`, (message) => {
            const data = JSON.parse(message.body);
            console.log("📥 메시지 수신 (active):", {
              topic: `/topic/active.${portfolioId}`,
              data,
              editorId,
              editorName,
            });
            callbacksRef.current.onActiveUsersUpdate?.(
              data.activeEditors || []
            );
          }),
          client.subscribe(`/topic/invite.${portfolioId}`, (msg) => {
            const data = JSON.parse(msg.body);
            console.log("📥 메시지 수신 (invite):", {
              topic: `/topic/invite.${portfolioId}`,
              data,
              editorId,
              editorName,
            });
          }),
        ];

        // 구독 정보를 클라이언트에 저장
        (client as ExtendedClient).subscriptions = subscriptions;
        console.log("📡 WebSocket 구독 설정 완료:", {
          portfolioId,
          editorId,
          editorName,
          subscriptionCount: subscriptions.length,
          topics: [
            `/topic/portfolio.${portfolioId}`,
            `/topic/typing.${portfolioId}`,
            `/topic/active.${portfolioId}`,
            `/topic/invite.${portfolioId}`,
          ],
        });

        // 참여 메시지 전송
        client.publish({
          destination: "/app/join",
          body: JSON.stringify({
            portfolioId,
            editorId,
            editorName,
          }),
        });

        clientRef.current = client as ExtendedClient;
      },
      onStompError: (frame) => {
        console.error("❌ STOMP 에러:", {
          message: frame.headers["message"],
          body: frame.body,
          command: frame.command,
          headers: frame.headers,
        });
        setIsConnected(false);
        connectingRef.current = false;
      },
      onWebSocketError: (event) => {
        console.error("❌ WebSocket 에러:", event);
        setIsConnected(false);
        connectingRef.current = false;
      },
      onWebSocketClose: (event) => {
        console.log("WebSocket 연결 종료:", event);
        setIsConnected(false);
        connectingRef.current = false;

        // 정상적인 종료가 아닌 경우에만 재연결 시도
        if (event.code !== 1000) {
          console.log("비정상 종료로 인한 재연결 시도...");
          setTimeout(connectWebSocket, 5000);
        }
      },
    });

    try {
      client.activate();
    } catch (error) {
      console.error("웹소켓 활성화 실패:", error);
      connectingRef.current = false;
      setIsConnected(false);
    }
  }, [portfolioId, editorId, editorName, token]);

  // 웹소켓 연결 관리
  useEffect(() => {
    connectWebSocket();

    return () => {
      console.log("웹소켓 연결 정리");
      if (clientRef.current?.connected) {
        // 구독 해제
        clientRef.current.subscriptions?.forEach((sub: StompSubscription) =>
          sub.unsubscribe()
        );
        clientRef.current.deactivate();
      }
      connectingRef.current = false;
      setIsConnected(false);
    };
  }, [connectWebSocket]);

  const sendEditMessage = useCallback(
    (field: string, content: string) => {
      if (
        !isConnected ||
        !clientRef.current?.connected ||
        !portfolioId ||
        !editorId
      ) {
        console.log("❌ 메시지 전송 실패:", {
          isConnected,
          portfolioId,
          editorId,
        });
        return;
      }

      console.log("📤 메시지 전송 시도:", {
        field,
        content,
        editorId,
        editorName,
      });

      clientRef.current.publish({
        destination: "/app/edit",
        body: JSON.stringify({
          portfolioId,
          editorId,
          editorName,
          field,
          content,
          timestamp: Date.now(),
        }),
      });
    },
    [isConnected, portfolioId, editorId, editorName]
  );

  const sendTypingStatus = useCallback(
    (isTyping: boolean) => {
      if (
        !isConnected ||
        !clientRef.current?.connected ||
        !portfolioId ||
        !editorId
      ) {
        console.log("❌ 타이핑 상태 전송 실패:", {
          isConnected,
          portfolioId,
          editorId,
        });
        return;
      }

      console.log("✏️ 타이핑 상태 전송:", { isTyping, editorId, editorName });

      clientRef.current.publish({
        destination: "/app/typing",
        body: JSON.stringify({
          portfolioId,
          editorId,
          editorName,
          typing: isTyping,
          timestamp: Date.now(),
        }),
      });
    },
    [isConnected, portfolioId, editorId, editorName]
  );

  return {
    isConnected,
    sendEditMessage,
    sendTypingStatus,
  };
}

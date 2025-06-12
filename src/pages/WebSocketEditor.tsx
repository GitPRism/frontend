import React, { useEffect, useRef } from "react";
import SockJS from "sockjs-client";
import { Client, Frame, IMessage } from "@stomp/stompjs";

type Props = {
  portfolioId: number;
  editorId: number;
};

export default function WebSocketEditor({ portfolioId, editorId }: Props) {
  const clientRef = useRef<Client | null>(null);

  useEffect(() => {
    console.log("🔥 웹소켓 연결 시작");
    const socket = new SockJS("http://localhost:8080/ws/edit");

    const stompClient = new Client({
      webSocketFactory: () => socket,
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    stompClient.onConnect = (frame: Frame) => {
      console.log("✅ 웹소켓 연결 성공", frame);

      // 실제 구독
      stompClient.subscribe(
        `/topic/editor/${editorId}`,
        (message: IMessage) => {
          console.log("📩 메시지 도착:", message.body);
        }
      );
    };

    stompClient.onStompError = (frame) => {
      console.error("❌ STOMP 에러 발생", frame);
    };

    stompClient.onWebSocketError = (event) =>
      console.error("WebSocket error:", event);

    stompClient.activate();
    clientRef.current = stompClient;

    return () => {
      clientRef.current?.deactivate();
    };
  }, [editorId]);

  return <div className="text-red-500">소켓 연결 테스트</div>;
}

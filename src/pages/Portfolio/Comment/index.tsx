import InputForm from "./InputForm";
import List from "./List";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/apiClient";

function Comment({ portfolioId }: { portfolioId: string | undefined }) {
  const { data } = useQuery({
    queryKey: ["comments", portfolioId],
    queryFn: () => apiClient.get(`/api/v1/comments/${portfolioId}`),
    refetchOnWindowFocus: false, // 창 포커스 이동 시 재요청 방지
    refetchOnMount: false, // 컴포넌트 마운트 시 재요청 방지
  });
  const comments = data?.data.data;

  return (
    <section aria-label="댓글 영역" className="mt-8">
      <p className="text-lg font-semibold">댓글 {comments?.length}</p>
      <InputForm portfolioId={portfolioId} />
      <List comments={comments} />
    </section>
  );
}

export default Comment;

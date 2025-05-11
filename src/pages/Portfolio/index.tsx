import { useParams } from "react-router-dom";
import Title from "./Title";
import PortfolioContent from "@/components/common/portfolio/PortfolioContent";
import Comment from "./Comment";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/apiClient";
import ButtonSection from "./ButtonSection";

function Portfolio() {
  const { portfolioId } = useParams();
  // ai 생성 결과에 있던, 컴포넌트를 공통으로 바꾸고 가져와서 props로 넘겨주면 될듯
  const { data, isLoading } = useQuery({
    queryKey: ["portfolio", portfolioId],
    queryFn: async () => {
      const response = await apiClient.get(`api/v1/portfolios/${portfolioId}`);
      console.log(response.data);
      return response.data;
    },
    enabled: !!portfolioId, // 포트폴리오 아이디가 없으면 데이터를 가져오지 않음
    staleTime: 1000 * 60 * 10, // 10분 동안 데이터를 가져오지 않음
    gcTime: 1000 * 60 * 10, // 10분 동안 데이터를 가져오지 않음
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);

  return (
    <main className="mt-4 max-w-3xl m-auto flex flex-col gap-4">
      {/* 게시글 헤더 */}
      <Title
        title={data?.title}
        updatedAt={data?.updatedAt}
        username={data?.username}
      />
      {/* 본문 */}
      <div className="bg-white">
        <PortfolioContent title={data?.title} description={data?.description} />
      </div>
      <ButtonSection
        portfolioId={data?.portfolioId}
        likeCount={data?.likeCount}
        bookmarkCount={data?.bookmarkCount}
        isBookmarked={data?.bookmarked}
        isLiked={data?.liked} // 서버 좋아요 여부 추후 추가 예정
      />
      {/* 댓글 섹션 */}
      <Comment portfolioId={data?.portfolioId} />
    </main>
  );
}

export default Portfolio;

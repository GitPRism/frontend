import PortfolioList from "./PortfolioList";

import { getAllPortfolios } from "@/services/Portfolio/getAllPortfolios";
import { useQuery } from "@tanstack/react-query";
import { getPopularPortfolios } from "@/services/Portfolio/getPopularPortfolios";
import { useSearchStore } from "@/store/useSearchStore";

function Home() {
  const { searchQuery } = useSearchStore();

  const { data: portfolios, isLoading } = useQuery({
    queryKey: ["portfolios"],
    queryFn: getAllPortfolios,
    refetchOnMount: true,
  });

  const { data: popularPortfolios } = useQuery({
    queryKey: ["popularPortfolios"],
    queryFn: getPopularPortfolios,
  });

  // 전체 포트폴리오만 검색어에 따라 필터링
  const filteredPortfolios =
    portfolios?.data?.filter((portfolio: any) =>
      portfolio.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <PortfolioList
        title="인기 포트폴리오"
        data={popularPortfolios?.data}
        showRank={true}
      />
      <PortfolioList
        title="전체 포트폴리오"
        data={
          searchQuery
            ? [...filteredPortfolios].reverse()
            : [...portfolios?.data].reverse() || []
        }
      />
    </>
  );
}

export default Home;

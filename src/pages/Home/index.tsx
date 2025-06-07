import PortfolioList from "./PortfolioList";

import { getAllPortfolios } from "@/services/Portfolio/getAllPortfolios";
import { useQuery } from "@tanstack/react-query";
import { getPopularPortfolios } from "@/services/Portfolio/getPopularPortfolios";

function Home() {
  const { data: portfolios, isLoading } = useQuery({
    queryKey: ["portfolios"],
    queryFn: getAllPortfolios,
    refetchOnMount: true,
  });

  const { data: popularPortfolios } = useQuery({
    queryKey: ["popularPortfolios"],
    queryFn: getPopularPortfolios,
  });

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <PortfolioList
        title="인기 포트폴리오"
        data={popularPortfolios?.data.slice(0, 3) || []}
        showRank={true}
      />
      <PortfolioList title="전체 포트폴리오" data={portfolios?.data || []} />
    </>
  );
}

export default Home;

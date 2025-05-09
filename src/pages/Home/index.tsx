import PortfolioList from "./PortfolioList";
import { popularList } from "@/mocks/popularList";
import { allList } from "@/mocks/allList";

import { getAllPortfolios } from "@/services/Portfolio/getAllPortfolios";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const { data: portfolios, isLoading } = useQuery({
    queryKey: ["portfolios"],
    queryFn: getAllPortfolios,
  });

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <PortfolioList title="인기 포트폴리오" data={popularList} />
      <PortfolioList title="전체 포트폴리오" data={portfolios.data || []} />
    </>
  );
}

export default Home;

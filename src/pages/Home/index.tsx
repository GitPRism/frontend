import PortfolioList from "./PortfolioList";
import { popularList } from "@/mocks/popularList";
import { allList } from "@/mocks/allList";

function Home() {
  return (
    <>
      <PortfolioList title="인기 포트폴리오" data={popularList} />
      <PortfolioList title="전체 포트폴리오" data={allList} />
    </>
  );
}

export default Home;

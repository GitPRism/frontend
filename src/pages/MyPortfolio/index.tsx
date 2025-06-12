import PortfolioCard from "./PortfolioCard";
import { useQuery } from "@tanstack/react-query";
import { getMyPortfolio } from "@/services/Portfolio/getMyPortfolio";

function MyPortfolio() {
  const { data: portfolioList, isLoading } = useQuery({
    queryKey: ["myPortfolio"],
    queryFn: getMyPortfolio,
    staleTime: Infinity, // 데이터는 절대 stale 상태가 안 됨
    gcTime: Infinity, // 캐시도 무제한 유지 -> gcTime으로 변경됨
    refetchOnWindowFocus: false, // 탭 다시 올려도 재요청 안 함
    refetchOnMount: false, // 컴포넌트 다시 떠도 재요청 안 함
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(portfolioList.reverse());

  return (
    <section>
      <h1 className="text-xl">내 포트폴리오</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-7 p-2">
        {[...portfolioList].reverse().map((portfolio: any, idx: number) => (
          <PortfolioCard key={idx} portfolio={portfolio} />
        ))}
      </ul>
    </section>
  );
}

export default MyPortfolio;

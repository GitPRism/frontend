import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/apiClient";
import { useNavigate } from "react-router-dom";

function TrendingPortfolio() {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["trendingPortfolio"],
    queryFn: () => apiClient.get("/api/v1/portfolios/popular?limit=10"),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="py-2 px-1.5 text-center border-1 border-rank-border w-full rounded-lg">
      <p className="text-base pb-2 text-white">실시간 인기 순위</p>

      {/* 리스트 항목 */}
      <ul>
        {data?.data.data.map((item: any, idx: number) => (
          <li
            key={item.portfolioId}
            className="flex items-center border-b border-rank-divider p-1 gap-2 hover:bg-button-bg-second"
            onClick={() => {
              navigate(`/portfolio/${item.portfolioId}`);
            }}
          >
            <div>
              <span className="w-4 shrink-0 text-white">{idx + 1}</span>
              <span className="flex-1 truncate text-rank-text">
                {item.title}
              </span>
              <span className="max-w-[80px] truncate text-rank-text">
                {item.author}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingPortfolio;

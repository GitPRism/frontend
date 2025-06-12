import { useQuery } from "@tanstack/react-query";
import { createPortfolio } from "@/services/Portfolio/createPortfolio";

// 포트폴리오 생성
export const usePortfolioData = (repoId: string[]) => {
  return useQuery({
    queryKey: ["portfolio", repoId],
    queryFn: () => createPortfolio(repoId),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
  });
};

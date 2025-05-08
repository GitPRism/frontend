import { useQuery } from "@tanstack/react-query";
import { createPortfolio } from "@/services/Portfolio/createPortfolio";

export const usePortfolioData = (repoId: string) => {
  return useQuery({
    queryKey: ["portfolio", repoId],
    queryFn: () => createPortfolio(repoId),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
  });
};

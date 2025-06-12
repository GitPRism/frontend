import apiClient from "@/services/apiClient";

// 포트폴리오 타이틀 수정
export const editPortfolioTitle = (repoId: number, title: string) => {
  return apiClient.patch(`/api/v1/portfolios/${repoId}`, { title });
};

// 포트폴리오 컨텐츠 수정
export const editPortfolioContent = (repoId: number, description: string) => {
  return apiClient.patch(`/api/v1/portfolios/${repoId}`, {
    description,
  });
};

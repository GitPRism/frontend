import apiClient from "@/services/apiClient";

export const getDetailPortfolio = async (portfolioId: number) => {
  const response = await apiClient.get(`/api/v1/portfolios/${portfolioId}`);
  return response.data;
};

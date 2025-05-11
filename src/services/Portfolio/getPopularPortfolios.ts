import apiClient from "../apiClient";

export const getPopularPortfolios = async () => {
  const response = await apiClient.get("/api/v1/portfolios/popular?limit=10");
  return response.data;
};

import apiClient from "@/services/apiClient";

export const getAllPortfolios = async () => {
  const response = await apiClient.get(`/api/v1/portfolios/public`);
  return response.data;
};

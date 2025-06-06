import apiClient from "@/services/apiClient";

export const getMyPortfolio = async () => {
  const response = await apiClient.get("/api/v1/portfolios/my");
  return response.data;
};

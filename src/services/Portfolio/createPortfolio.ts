import apiClient from "@/services/apiClient";

export const createPortfolio = async (repoId: string[]) => {
  const response = await apiClient.post(`/api/v1/portfolios/batch`, {
    repoIds: repoId,
  });
  return response.data;
};

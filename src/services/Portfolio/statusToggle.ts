import apiClient from "@/services/apiClient";

export const statusToggle = async (repoId: string) => {
  const response = await apiClient.put(`/api/v1/portfolios/${repoId}`);
  return response.data;
};

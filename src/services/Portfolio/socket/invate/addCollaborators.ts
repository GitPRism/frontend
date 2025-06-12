import apiClient from "@/services/apiClient";

export const addCollaborators = (
  portfolioId: number,
  userId: string,
  role: string
) => {
  return apiClient.post(`/api/v1/portfolios/${portfolioId}/collaborators`, {
    userId: userId,
    role,
  });
};

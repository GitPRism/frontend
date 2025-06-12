import apiClient from "@/services/apiClient";

export const getPortfolioDraft = async (portfolioId: number) => {
  const res = await apiClient.get(`/api/v1/portfolios/${portfolioId}/draft`);
  return res.data;
};

export const postCommitDraft = async (portfolioId: number) => {
  apiClient.post(`/api/v1/portfolios/${portfolioId}/commit-draft`);
};

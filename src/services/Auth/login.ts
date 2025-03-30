import apiClient from "../apiClient";

export const login = async (code: string) => {
  const response = await apiClient.get(`/api/v1/github/login?code=${code}`);
  return response.data;
};

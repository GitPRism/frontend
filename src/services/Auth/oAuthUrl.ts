import apiClient from "../apiClient";

const getOAuthUrl = async () => {
  const response = await apiClient.get("/api/v1/github/oauth-url");
  return response.data;
};

export default getOAuthUrl;

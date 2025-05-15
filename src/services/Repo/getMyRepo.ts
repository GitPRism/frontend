import apiClient from "../apiClient";
// 사용자 레포 목록 가져오기
export const getMyRepo = async () => {
  const res = await apiClient.get(`/api/v1/github-repos`);
  return res.data;
};

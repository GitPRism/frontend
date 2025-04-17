import apiClient from "../apiClient";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";

// 사용자 레포 목록 가져오기
export const getMyRepo = async () => {
  const { userId } = useAuthStore.getState();
  console.log(`userId: ${userId}`);
  const res = await apiClient.get(`/api/v1/github-repos?userId=${userId}`);
  console.log(res);
  console.log(res.data);
  return res.data;
};

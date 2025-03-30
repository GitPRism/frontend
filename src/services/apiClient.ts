import axios from "axios";

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  //   withCredentials: true, // 잠시 주석처리 (해제해야 함)
});

apiClient.interceptors.request.use(
  (config) => {
    // 로그인 형식에 맞춰 토큰 가져오는 방법 수정 필요
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;

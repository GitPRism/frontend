import axios from "axios";

const API_URL = "https://api.example.com/auth";

// 로그인 요청 API
export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // 토큰 반환
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
};

// 로그아웃 처리 (예제)
export const logout = () => {
  localStorage.removeItem("token"); // 토큰 삭제
};

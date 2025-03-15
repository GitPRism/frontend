import { useState } from "react";

// 로그인 상태를 관리하는 커스텀 훅
function useExample() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}

export default useExample;

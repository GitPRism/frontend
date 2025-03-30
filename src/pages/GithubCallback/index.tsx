import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GithubCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      localStorage.setItem("code", code);
      navigate("/home"); // 로그인 후 메인 페이지로 이동
    }
  }, [navigate]);

  return <div>로그인 처리 중... </div>;
}

export default GithubCallback;

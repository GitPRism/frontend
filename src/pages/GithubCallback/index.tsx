import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "@/services/Auth/login";
import { useAuthStore } from "@/store/useAuthStore";
import { getMyRepo } from "@/services/Repo/myRepo";

function GithubCallback() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setToken, setGithubId, setUsername, setEmail, setUserId } =
    useAuthStore();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");
    console.log(code);

    if (code) {
      login(code)
        .then(async (res) => {
          console.log(res);
          // console.log(`token: ${res.token}`);
          setToken(res.token);
          setGithubId(res.githubId);
          setUsername(res.username);
          setEmail(res.email);
          setUserId(res.id);

          // await getMyRepo()
          //   .then((res) => {
          //     console.log(`성공: ${res}`);
          //     navigate("/home");
          //   })
          //   .catch((err) => {
          //     console.log(`실패: ${err}`);
          //   });
          navigate("/home");
        })
        .catch((err) => {
          console.error(err);
        });

      // navigate("/home"); // 로그인 후 메인 페이지로 이동
    }
  }, []);

  return <div>로그인 처리 중... </div>;
}

export default GithubCallback;

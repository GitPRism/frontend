import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();
  {
    /* 왼쪽: 로고 */
  }
  return (
    <div
      onClick={() => navigate("/home")}
      className="flex items-center flex-none px-4 w-80"
    >
      로고
    </div>
  );
}
export default Start;

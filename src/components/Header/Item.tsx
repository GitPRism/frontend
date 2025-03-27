import { useNavigate, useLocation } from "react-router-dom";

function Item() {
  const navigate = useNavigate();
  const location = useLocation();
  const projectId = localStorage.getItem("projectId"); // 임시 프로젝트 아이디 로컬스리지 사용

  return (
    <ul className="menu menu-horizontal text-xl flex gap-5 ">
      <li
        className={`border-b-2 ${
          location.pathname === `/home/${projectId}`
            ? "border-royal"
            : "border-transparent"
        }`}
        onClick={() => navigate(`/home/${projectId}`)}
      >
        <span>{projectId}</span>
      </li>
      <li
        className={`border-b-2 ${
          location.pathname === "/projectevaluation"
            ? "border-royal"
            : "border-transparent"
        }`}
        onClick={() => navigate(`/projectevaluation/${projectId}`)}
      >
        <span>프로젝트 종합 평가</span>
      </li>
    </ul>
  );
}

export default Item;

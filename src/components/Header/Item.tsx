import { useNavigate, useLocation } from "react-router-dom";

function Item() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <ul className="menu menu-horizontal text-xl flex gap-5 ">
      <li
        className={`border-b-2 ${
          location.pathname === "/home" ? "border-royal" : "border-transparent"
        }`}
        onClick={() => navigate("/home")}
      >
        <span>프로젝트1</span>
      </li>
      <li
        className={`border-b-2 ${
          location.pathname === "/projectevaluation"
            ? "border-royal"
            : "border-transparent"
        }`}
        onClick={() => navigate("/projectevaluation")}
      >
        <span>프로젝트 종합 평가</span>
      </li>
    </ul>
  );
}

export default Item;

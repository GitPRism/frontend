import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-full">
      <div className="navbar shadow-sm border-b-2 border-[#404040] p-0">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-xl flex gap-5 ">
            <li
              className={`border-b-2 ${
                location.pathname === "/home"
                  ? "border-royal"
                  : "border-transparent"
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
        </div>
      </div>
    </div>
  );
}

export default Header;

import { useSidebarStore } from "@/store/useSidebarStore";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function PortfolioLink() {
  const { selectedCategory, setSelectedCategory, setSelectedProject } =
    useSidebarStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/portfolio") {
      setSelectedCategory("포트폴리오");
      setSelectedProject(null);
    }
  }, [location.pathname, setSelectedCategory, setSelectedProject]);

  return (
    <li>
      <p
        className={`px-4 py-2 rounded-lg cursor-pointer block ${
          selectedCategory === "포트폴리오" ? "bg-shadow text-white" : ""
        }`}
        onClick={() => {
          setSelectedCategory("포트폴리오");
          setSelectedProject(null); // 프로젝트 선택 해제
          navigate("/portfolio");
        }}
      >
        포트폴리오
      </p>
    </li>
  );
}

export default PortfolioLink;

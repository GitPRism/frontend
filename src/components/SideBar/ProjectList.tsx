import { useEffect } from "react";
import { useSidebarStore } from "@/store/useSidebarStore";
import { useNavigate } from "react-router-dom";

function ProjectList() {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedProject,
    setSelectedProject,
  } = useSidebarStore();

  const navigate = useNavigate();

  const projects = ["프로젝트 1", "프로젝트 2", "프로젝트 3"];

  useEffect(() => {
    if (
      selectedCategory === "프로젝트" &&
      !selectedProject &&
      projects.length > 0
    ) {
      setSelectedProject(projects[0]); // 첫 번째 프로젝트 자동 선택
    }
  }, [selectedCategory, selectedProject, projects, setSelectedProject]);

  return (
    <li>
      <details>
        <summary
          className={`px-4 py-2 rounded-lg cursor-pointer ${
            selectedCategory === "프로젝트" ? "bg-shadow text-white" : ""
          }`}
          onClick={() => {
            setSelectedCategory("프로젝트");
            navigate("/home");
          }}
        >
          프로젝트
        </summary>
        <ul className="pl-4">
          {projects.map((project) => (
            <li key={project}>
              <a
                className={`block px-4 py-2 rounded-lg ${
                  selectedProject === project ? "bg-ocean text-white" : ""
                }`}
                onClick={() => {
                  setSelectedProject(project);
                  navigate(`/projects/${encodeURIComponent(project)}`);
                }}
              >
                {project}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
}

export default ProjectList;

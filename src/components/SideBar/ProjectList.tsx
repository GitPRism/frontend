import { useInitialProject } from "@/hooks/useInitialProject";
import { useSidebarStore } from "@/store/useSidebarStore";
import { Link, useNavigate } from "react-router-dom";
import { projectList } from "@/mocks/projectList";

function ProjectList() {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedProject,
    setSelectedProject,
  } = useSidebarStore();

  const navigate = useNavigate();

  useInitialProject();

  const projects = projectList.map((project) => project.data.repo_name);

  return (
    <li>
      <details>
        <summary
          className={`px-4 py-2 rounded-lg cursor-pointer ${
            selectedCategory === "프로젝트" ? "bg-shadow text-white" : ""
          }`}
          onClick={() => {
            setSelectedCategory("프로젝트");
            navigate(`/home/${encodeURIComponent(selectedProject || "")}`);
          }}
        >
          프로젝트
        </summary>
        <ul className="pl-4">
          {projects.map((project) => (
            <li key={project}>
              <Link
                to={`/home/${encodeURIComponent(project)}`}
                onClick={() => {
                  setSelectedProject(project);
                  localStorage.setItem("projectId", project);
                }}
                className={`block px-4 py-2 rounded-lg ${
                  selectedProject === project ? "bg-ocean text-white" : ""
                }`}
              >
                {project}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
}

export default ProjectList;

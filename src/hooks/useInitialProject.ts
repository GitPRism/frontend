import { useEffect } from "react";
import { useSidebarStore } from "@/store/useSidebarStore";
import { projectList } from "@/mocks/projectList";

const PROJECTS = projectList.map((project) => project.data.repo_name); // 상수로 이동

export function useInitialProject() {
  const { selectedCategory, selectedProject, setSelectedProject } =
    useSidebarStore();

  useEffect(() => {
    if (
      selectedCategory === "프로젝트" &&
      !selectedProject &&
      PROJECTS.length > 0
    ) {
      setSelectedProject(PROJECTS[0]);
    }
  }, [selectedCategory, selectedProject, setSelectedProject]);
}

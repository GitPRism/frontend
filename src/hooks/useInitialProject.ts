import { useEffect } from "react";
import { useSidebarStore } from "@/store/useSidebarStore";

const PROJECTS = ["프로젝트 1", "프로젝트 2", "프로젝트 3"]; // 상수로 이동

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

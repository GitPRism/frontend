import { create } from "zustand";

interface SidebarState {
  selectedCategory: string;
  selectedProject: string | null;
  setSelectedCategory: (category: string) => void;
  setSelectedProject: (project: string | null) => void;
}

// Zustand Store 생성
export const useSidebarStore = create<SidebarState>((set) => ({
  selectedCategory: "프로젝트",
  selectedProject: null,
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedProject: (project) => set({ selectedProject: project }),
}));

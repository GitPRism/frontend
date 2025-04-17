import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  githubId: string | null;
  username: string | null;
  email: string | null;
  userId: string | null;
  setToken: (token: string) => void;
  setGithubId: (githubId: string) => void;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setUserId: (userId: string) => void;
  logout: () => void;
}

// 로그인 상태 관리
export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      token: "",
      githubId: "",
      username: "",
      email: "",
      userId: "",
      setToken: (token: string) => set({ token }),
      setGithubId: (githubId: string) => set({ githubId }),
      setUsername: (username: string) => set({ username }),
      setEmail: (email: string) => set({ email }),
      setUserId: (userId: string) => set({ userId }),
      logout: () => {
        set({
          token: "",
          githubId: "",
          username: "",
          email: "",
          userId: "",
        });
        window.location.href = "/";
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

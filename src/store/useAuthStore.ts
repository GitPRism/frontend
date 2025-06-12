import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  githubId: string | null;
  username: string;
  email: string | null;
  userId: number;
  avatarUrl: string;
  setToken: (token: string) => void;
  setGithubId: (githubId: string) => void;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setUserId: (userId: number) => void;
  setAvatarUrl: (avatarUrl: string) => void;
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
      userId: 0,
      avatarUrl: "",
      setToken: (token: string) => set({ token }),
      setGithubId: (githubId: string) => set({ githubId }),
      setUsername: (username: string) => set({ username }),
      setEmail: (email: string) => set({ email }),
      setUserId: (userId: number) => set({ userId }),
      setAvatarUrl: (avatarUrl: string) => set({ avatarUrl }),
      logout: () => {
        set({
          token: "",
          githubId: "",
          username: "",
          email: "",
          userId: 0,
          avatarUrl: "",
        });
        window.location.href = "/";
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

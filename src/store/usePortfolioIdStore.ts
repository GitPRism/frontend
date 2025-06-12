import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PortfolioIdState {
  portfolioIdStore: number;
  setPortfolioIdStore: (portfolioId: number) => void;
}

export const usePortfolioIdStore = create<PortfolioIdState>()(
  persist(
    (set) => ({
      portfolioIdStore: 0,
      setPortfolioIdStore: (portfolioId: number) =>
        set({ portfolioIdStore: portfolioId }),
    }),
    {
      name: "portfolio-id-storage", // localStorage에 저장될 키 이름
    }
  )
);

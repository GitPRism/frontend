import { create } from "zustand";

interface PortfolioState {
  portfolioId: number | null;
  editorId: number | null;
  editorName: string | null;
  setPortfolioInfo: (
    portfolioId: number,
    editorId: number,
    editorName: string
  ) => void;
  clearPortfolioInfo: () => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  portfolioId: null,
  editorId: null,
  editorName: null,
  setPortfolioInfo: (portfolioId, editorId, editorName) =>
    set({ portfolioId, editorId, editorName }),
  clearPortfolioInfo: () =>
    set({ portfolioId: null, editorId: null, editorName: null }),
}));

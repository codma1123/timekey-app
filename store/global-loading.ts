import { create } from "zustand";

interface GlobalLoadingStore {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useGlobalLoading = create<GlobalLoadingStore>((set) => ({
  loading: false,
  setLoading: (loading) => {
    set({ loading });
  },
}));

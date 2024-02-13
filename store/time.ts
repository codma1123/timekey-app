import { create } from "zustand";

interface TimeStore {
  currentTime: Date;
  setCurrentTime: (newTime: Date) => void;
}

export const useTimeStore = create<TimeStore>((set) => ({
  currentTime: new Date(),
  setCurrentTime: (newTime) => {
    set({ currentTime: newTime });
  },
}));

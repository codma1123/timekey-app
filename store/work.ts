import { delay } from "@/lib/delay";
import { create } from "zustand";

interface WorkStoreState {
  isWork: boolean;
  canWorkOff: boolean;
}

interface WorkStoreActions {
  earlyWorkOff: () => void;
  workOff: () => void;
  workOn: () => void;
}

export const useWorkStore = create<WorkStoreState & WorkStoreActions>((set) => ({
  isWork: false,
  canWorkOff: true,

  workOff: () =>
    new Promise((resolve) => {
      delay(1000).then(resolve);
    }),

  earlyWorkOff: () => {
    set({ isWork: false });
  },

  workOn() {
    set({ isWork: true });
  },
}));

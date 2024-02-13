import { delay } from "@/lib/delay";
import { create } from "zustand";

interface WorkStoreState {
  isWork: boolean;
  canWorkOff: boolean;
}

interface WorkStoreActions {
  earlyWorkOff: () => Promise<void>;
  workOff: () => Promise<void>;
}

export const useWorkStore = create<WorkStoreState & WorkStoreActions>((set) => ({
  isWork: true,
  canWorkOff: true,

  workOff: () =>
    new Promise((resolve) => {
      delay(1000).then(resolve);
    }),
  earlyWorkOff: () =>
    new Promise((resolve) => {
      delay(1000).then(resolve);
    }),
}));

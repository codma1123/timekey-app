import { Vacation } from "@/api/types";
import { AnyAction } from "@/store/types";
import { create } from "zustand";

type BottomOverType = "vacationDetail";

type BottomOverActions = AnyAction<"vacationDetail", Vacation>;
type BottomOverData = BottomOverActions["payload"];

interface BottomOverState {
  isOpen: boolean;
  bottomOverType: BottomOverType;
  bottomOverData: BottomOverData | null;
}

interface BottomOverAction {
  openBottomOver: (bottomOverType: BottomOverType) => void;
  openBottomOverWithPayload: (action: BottomOverActions) => void;
  closeBottomOver: () => void;
}

export const useBottomOverStore = create<BottomOverState & BottomOverAction>((set) => ({
  isOpen: false,
  bottomOverType: null,
  bottomOverData: null,
  openBottomOver: (bottomOverType) => set({ isOpen: true, bottomOverType }),
  openBottomOverWithPayload: ({ payload, type }) => set({ isOpen: true, bottomOverType: type, bottomOverData: payload }),
  closeBottomOver: () => set({ isOpen: false }),
}));

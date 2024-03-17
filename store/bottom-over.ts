import { Vacation } from "@/types/vacation";
import { AnyAction } from "@/store/types";
import { create } from "zustand";
import { Location } from "@/types/location";

type BottomOverType = "vacationDetail" | "location";

type BottomOverActions = AnyAction<"vacationDetail", Vacation> | AnyAction<"location", Location>;

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
  clear: () => void;
}

export const useBottomOverStore = create<BottomOverState & BottomOverAction>((set) => ({
  isOpen: false,
  bottomOverType: null,
  bottomOverData: null,
  openBottomOver: (bottomOverType) => set({ isOpen: true, bottomOverType }),
  openBottomOverWithPayload: ({ payload, type }) => {
    set({ isOpen: true, bottomOverType: type, bottomOverData: payload });
  },
  clear: () => set({ bottomOverData: null }),
  closeBottomOver: () => set({ isOpen: false }),
}));

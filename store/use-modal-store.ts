import { AnyAction } from "@/store/types";
import { DateRange } from "react-day-picker";
import { create } from "zustand";

export type ModalType = "ealryWorkoff" | "workoff" | "vacation";

type VacationRequestModalAction = AnyAction<"vacation", DateRange>;

type ModalActions = VacationRequestModalAction;

interface ModalStoreState {
  isOpen: boolean;
  modalType: ModalType;
  modalData: ModalActions["payload"] | null;
}

interface ModalStoreAction {
  onClose: () => void;
  onOpen: (modalType: ModalType) => void;
  openWithAction: (action: ModalActions) => void;
}

export const useModalStore = create<ModalStoreState & ModalStoreAction>((set) => ({
  isOpen: false,
  modalType: null,
  modalData: null,
  onClose: () => set({ isOpen: false }),
  onOpen: (modalType) => set({ isOpen: true, modalType, modalData: null }),
  openWithAction: ({ payload, type }) => set({ isOpen: true, modalType: type, modalData: payload }),
}));

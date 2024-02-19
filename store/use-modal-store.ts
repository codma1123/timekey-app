import { create } from "zustand";

export type ModalType = "ealryWorkoff" | "workoff" | "vacation";

interface ModalData {}

interface ModalStoreState {
  isOpen: boolean;
  modalType: ModalType;
}

interface ModalStoreAction {
  onClose: () => void;
  onOpen: (modalType: ModalType) => void;
}

export const useModalStore = create<ModalStoreState & ModalStoreAction>((set) => ({
  isOpen: false,
  modalType: null,
  onClose: () => set({ isOpen: false }),
  onOpen: (modalType) => set({ isOpen: true, modalType }),
}));

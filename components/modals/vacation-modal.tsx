import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useModalStore } from "@/store/use-modal-store";
import React from "react";

const VacationModal = () => {
  const { isOpen, modalType, onClose } = useModalStore();

  const isModalOpen = isOpen && modalType === "vacation";

  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={onClose}
    >
      <DialogContent className="sm:max-w-md bg-white w-[90%] rounded-[40px]">
        <DialogHeader>
          <DialogTitle className="text-xl">연차 신청</DialogTitle>
          <DialogDescription className="text-lg">정말로 연차를 신청하시겠습니까?</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose className="w-full flex justify-center gap-4">
            <Button
              className="bg-zinc-700 text-lg w-28 rounded-full"
              variant="error"
              type="button"
              size="lg"
            >
              연차 신청
            </Button>

            <Button
              className="bg-slate-200 text-lg w-28 rounded-full"
              variant="ghost"
              type="button"
              size="lg"
            >
              아니오
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VacationModal;

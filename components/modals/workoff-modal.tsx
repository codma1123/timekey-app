"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useModalStore } from "@/store/use-modal-store";

const WorkoffModal = () => {
  const { isOpen, modalType, onClose } = useModalStore();

  const isModalOpen = isOpen && modalType === "workoff";

  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={onClose}
    >
      <DialogContent className="sm:max-w-md bg-white w-[90%] rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl">퇴근</DialogTitle>
          <DialogDescription className="text-lg">퇴근 하시겠습니까?</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose className="w-full flex justify-center gap-4">
            <Button
              className="bg-error text-lg w-28 rounded-full"
              variant="error"
              type="button"
              size="lg"
            >
              퇴근
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

export default WorkoffModal;

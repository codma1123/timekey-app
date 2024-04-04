"use client";

import SlideDown from "@/components/motions/slide-down";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { delay } from "@/lib/delay";
import { useModalStore } from "@/store/use-modal-store";
import { useRouter } from "next/navigation";
import { useShallow } from "zustand/react/shallow";

const DuplicateModal = () => {
  const router = useRouter();
  const [isOpen, modalType, onClose] = useModalStore(useShallow((state) => [state.isOpen, state.modalType, state.onClose]));
  const isModalOpen = isOpen && modalType === "caution";

  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={onClose}
    >
      <DialogContent className="sm:max-w-md bg-white w-[90%] rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl">취소</DialogTitle>
          <DialogDescription className="text-lg">
            <div>취소 하시겠습니까?</div>
            <SlideDown
              delay={1}
              className="text-sm text-gray-600"
            >
              현재 진행 상황은 저장되지 않습니다.
            </SlideDown>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose className="w-full flex justify-center gap-4">
            <Button
              className="bg-error text-lg w-28 rounded-full"
              variant="error"
              type="button"
              size="lg"
              onClick={async () => {
                onClose();
                await delay(200);
                router.back();
              }}
            >
              취소
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

export default DuplicateModal;

import SlideDown from "@/components/motions/slide-down";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { delay } from "@/lib/delay";
import { useBottomOverStore } from "@/store/bottom-over";
import { useGlobalLoading } from "@/store/global-loading";
import { useModalStore } from "@/store/use-modal-store";
import { useShallow } from "zustand/react/shallow";

const VacationRequestCancelModal = () => {
  const [isOpen, modalType, onClose] = useModalStore(useShallow((state) => [state.isOpen, state.modalType, state.onClose]));
  const closeBottomOver = useBottomOverStore((state) => state.closeBottomOver);
  const setLoading = useGlobalLoading((state) => state.setLoading);

  const isModalOpen = isOpen && modalType === "vacation-cancel";

  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={onClose}
    >
      <DialogContent className="sm:max-w-md bg-white w-[90%] rounded-[40px] z-[52]">
        <DialogHeader>
          <DialogTitle className="text-xl">연차 신청 취소</DialogTitle>

          <DialogDescription className="text-lg">
            <SlideDown delay={0.4}>정말로 연차 신청을 취소 하시겠습니까?.</SlideDown>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose className="w-full flex justify-center gap-4">
            <Button
              className="bg-rose-500 text-lg w-28 rounded-full text-white"
              type="button"
              size="lg"
              onClick={async () => {
                setLoading(true);
                await delay(500);
                setLoading(false);
                closeBottomOver();
              }}
            >
              신청 취소
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

export default VacationRequestCancelModal;

import SlideDown from "@/components/motions/slide-down";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { delay } from "@/lib/utils";
import { useGlobalLoading } from "@/store/global-loading";
import { useModalStore } from "@/store/use-modal-store";
import { useRouter } from "next/navigation";

const VacationModal = () => {
  const { isOpen, modalType, modalData, onClose } = useModalStore();
  const { setLoading } = useGlobalLoading();

  const isModalOpen = isOpen && modalType === "vacation";
  const router = useRouter();

  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={onClose}
    >
      <DialogContent className="sm:max-w-md bg-white w-[90%] rounded-[40px]">
        <DialogHeader>
          <DialogTitle className="text-xl">연차 신청</DialogTitle>

          <DialogDescription className="text-lg">
            <SlideDown delay={0.4}>정말로 연차를 신청하시겠습니까?.</SlideDown>
            <SlideDown delay={0.7}>
              <p className="font-bold">2024.01.06 ~ 2024.01.07</p>
            </SlideDown>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose className="w-full flex justify-center gap-4">
            <Button
              className="bg-emerald-400 text-lg w-28 rounded-full text-white active:bg-blue-500"
              type="button"
              size="lg"
              onClick={async () => {
                setLoading(true);
                await delay(500);
                setLoading(false);
                router.back();
              }}
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

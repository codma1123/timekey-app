import SlideDown from "@/components/motions/slide-down";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { delay } from "@/lib/delay";
import { useAuthStore } from "@/store/auth";
import { useGlobalLoading } from "@/store/global-loading";
import { useModalStore } from "@/store/use-modal-store";
import { useRouter } from "next/navigation";
import { useShallow } from "zustand/react/shallow";

const VacationModal = () => {
  const router = useRouter();

  const [isOpen, modalType, onClose] = useModalStore(useShallow((state) => [state.isOpen, state.modalType, state.onClose]));
  const setLoading = useGlobalLoading((state) => state.setLoading);
  const id = useAuthStore((state) => state.id);

  const { toast } = useToast();

  const isModalOpen = isOpen && modalType === "vacation";

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
                router.push(`/$${id}/vacation`);
                await delay(600);

                toast({
                  description: "연차 신청이 완료되었습니다.",
                });
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

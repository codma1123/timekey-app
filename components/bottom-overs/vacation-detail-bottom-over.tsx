"use client";

import { Vacation, VacationStatusMap } from "@/types/vacation";

import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer";
import ListItem from "@/components/ui/list-item";
import { useBottomOverStore } from "@/store/bottom-over";
import { useModalStore } from "@/store/use-modal-store";
import { CalendarIcon } from "@radix-ui/react-icons";

const VacationDetailBottomOver = () => {
  const { isOpen, bottomOverType, bottomOverData, closeBottomOver, clear } = useBottomOverStore();
  const { openWithAction } = useModalStore();

  const isBottomOverOpen = isOpen && bottomOverType === "vacationDetail";
  const vacationData = bottomOverData as Vacation;

  if (!vacationData || !vacationData.date) return null;

  return (
    <Drawer
      open={isBottomOverOpen}
      onOpenChange={(e) => {
        if (!e) {
          closeBottomOver();
          clear();
        }
      }}
    >
      <DrawerTrigger className="hidden"></DrawerTrigger>
      <DrawerContent className="bg-zinc-700 ring-0 outline-none border-none h-[420px] text-white">
        <div className="absolute top-2 left-[50%] h-[6px] w-36 rounded-full bg-zinc-600/50 -translate-x-1/2"></div>

        <DrawerHeader className="text-2xl text-left flex items-center">
          <CalendarIcon className="h-5 w-5" />
          <span className="font-bold">연차 내역</span>
        </DrawerHeader>

        <DrawerDescription className="px-4">
          <div className="h-[1px] bg-zinc-600/50 my-1"></div>

          <ListItem
            title="신청 날짜"
            content={vacationData.date.toLocaleDateString()}
          />
          <ListItem
            title="승인 여부"
            content={<span className={vacationData.allowed ? "text-emerald-500" : "text-rose-500"}>{vacationData.allowed ? "승인" : "승인 대기중"}</span>}
          />
          <ListItem
            title="연차 상태"
            content={<span className={VacationStatusMap[vacationData.status].color}>{VacationStatusMap[vacationData.status].text}</span>}
          />
          <ListItem
            title="연차 사유"
            content={vacationData.reason}
          />
        </DrawerDescription>

        <DrawerFooter className="text-center">
          <button
            className="rounded-3xl bg-rose-500 text-white py-4 mb-4 text-lg"
            onClick={() =>
              openWithAction({
                type: "vacation-cancel",
                payload: {
                  id: "",
                },
              })
            }
          >
            연차 요청 취소
          </button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default VacationDetailBottomOver;

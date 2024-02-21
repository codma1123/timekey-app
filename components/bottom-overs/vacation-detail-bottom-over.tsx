"use client";

import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { useBottomOverStore } from "@/store/bottom-over";
import { XCircle } from "lucide-react";

const VacationDetailBottomOver = () => {
  const { isOpen, bottomOverType, bottomOverData: vacation, closeBottomOver } = useBottomOverStore();

  const isBottomOverOpen = isOpen && bottomOverType === "vacationDetail";

  return (
    <Drawer
      open={isBottomOverOpen}
      onOpenChange={(e) => !e && closeBottomOver()}
    >
      <DrawerTrigger className="hidden"></DrawerTrigger>
      <DrawerContent className="bg-zinc-700 ring-0 outline-none border-none h-96 text-white">
        <DrawerHeader className="text-2xl text-left">{vacation?.date.toLocaleDateString()}</DrawerHeader>

        <div className="absolute top-2 left-[50%] h-[6px] w-36 rounded-full bg-zinc-600/50 -translate-x-1/2"></div>
        <DrawerDescription className="px-4"></DrawerDescription>
      </DrawerContent>
    </Drawer>
  );
};

export default VacationDetailBottomOver;

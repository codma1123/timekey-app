"use client";

import { VacationStatusMap } from "@/types/vacation";

import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerTrigger } from "@/components/ui/drawer";

import { useBottomOverStore } from "@/store/bottom-over";

const LocationBottomOver = () => {
  const { isOpen, bottomOverType, closeBottomOver } = useBottomOverStore();

  const clsoe = useBottomOverStore((state) => state.closeBottomOver);

  const isBottomOverOpen = isOpen && bottomOverType === "location";

  return (
    <Drawer
      modal={false}
      open={isBottomOverOpen}
      onOpenChange={(e) => !e && closeBottomOver()}
    >
      <DrawerTrigger className="hidden"></DrawerTrigger>
      <DrawerContent
        className="bg-white ring-0 outline-none border-none h-[300px] text-white"
        onClick={closeBottomOver}
      >
        <div className="absolute top-2 left-[50%] h-[6px] w-36 rounded-full bg-zinc-600/50 -translate-x-1/2"></div>

        <DrawerDescription className="px-4"></DrawerDescription>

        <DrawerFooter className="text-center"></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default LocationBottomOver;

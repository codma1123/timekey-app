"use client";

import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer";

import { useBottomOverStore } from "@/store/bottom-over";
import { Hotel } from "lucide-react";
import { Location } from "@/types/location";
import { useShallow } from "zustand/react/shallow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useModalStore } from "@/store/use-modal-store";

const LocationBottomOver = () => {
  const [isOpen, bottomOverType, bottomOverData, closeBottomOver] = useBottomOverStore(useShallow((state) => [state.isOpen, state.bottomOverType, state.bottomOverData, state.closeBottomOver]));
  const onOpen = useModalStore((state) => state.onOpen);

  if (!bottomOverData) return null;

  const location = bottomOverData as Location;

  return (
    <Drawer
      modal={false}
      open={isOpen && bottomOverType === "location"}
      onOpenChange={(e) => !e && closeBottomOver()}
    >
      <DrawerTrigger className="hidden"></DrawerTrigger>

      <DrawerContent
        className="bg-white ring-0 outline-none border-none h-[200px] text-black"
        onClick={closeBottomOver}
      >
        <div className="absolute top-2 left-[50%] h-[6px] w-36 rounded-full bg-zinc-600/50 -translate-x-1/2"></div>

        <DrawerHeader className="text-xl text-left">
          <div className="flex gap-x-2 items-center">
            <Hotel />
            <p>{location.title}</p>
            <span className="flex gap-x-2 ml-auto">
              <Badge
                variant="destructive"
                className="bg-sky-300"
              >
                #주요 퇴근지
              </Badge>
              <Badge
                variant="destructive"
                className="bg-sky-300"
              ></Badge>
            </span>
          </div>
          <div className="text-zinc-600 text-sm">{location.address}</div>
        </DrawerHeader>

        <DrawerDescription className="px-4"></DrawerDescription>
      </DrawerContent>
    </Drawer>
  );
};

export default LocationBottomOver;

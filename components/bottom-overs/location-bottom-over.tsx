"use client";

import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer";

import { useBottomOverStore } from "@/store/bottom-over";
import { Hotel } from "lucide-react";
import { useEffect, useState } from "react";
import { Location } from "@/types/location";

const LocationBottomOver = () => {
  const { isOpen, bottomOverType, closeBottomOver, bottomOverData } = useBottomOverStore();
  const [isLoaded, setIsLoaded] = useState(false);

  const clsoe = useBottomOverStore((state) => state.closeBottomOver);

  const isBottomOverOpen = isOpen && bottomOverType === "location";

  if (!bottomOverData) return null;

  const location = bottomOverData as Location;

  return (
    <Drawer
      modal={false}
      open={isBottomOverOpen}
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
            {location.title}
          </div>
          <div className="text-zinc-600 text-sm">{location.address}</div>
        </DrawerHeader>

        <DrawerDescription className="px-4"></DrawerDescription>

        <DrawerFooter className="text-center"></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default LocationBottomOver;

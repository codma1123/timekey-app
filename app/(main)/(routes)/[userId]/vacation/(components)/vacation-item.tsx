"use client";

import { Vacation, VacationStatusMap } from "@/types/vacation";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useBottomOverStore } from "@/store/bottom-over";
import { CalendarIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SlideDown from "@/components/motions/slide-down";

const VacationItem = ({ vacation }: { vacation: Vacation }) => {
  const openBottomOverWithPayload = useBottomOverStore((state) => state.openBottomOverWithPayload);

  return (
    <SlideDown>
      <Alert className="text-white bg-zinc-600 ring-0 border-0 rounded-2xl active:ring-1 active:ring-emerald-400 transition-[box-shadow] duration-200">
        <AlertDescription
          className="flex items-center"
          onClick={() =>
            openBottomOverWithPayload({
              type: "vacationDetail",
              payload: vacation,
            })
          }
        >
          <motion.div className="absolute top-[-6px] left-[-6px] rounded-full h-4 w-4 bg-emerald-300"></motion.div>

          <CalendarIcon className="h-5 w-5" />
          <span className="ml-4">{new Date().toLocaleDateString()}</span>
          <span className={cn("ml-auto text-lg font-bold", VacationStatusMap[vacation.status].color)}>{VacationStatusMap[vacation.status].text}</span>
        </AlertDescription>
      </Alert>
    </SlideDown>
  );
};

export default VacationItem;

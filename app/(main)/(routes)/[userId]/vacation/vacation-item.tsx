"use client";

import { Vacation } from "@/api/types";
import IntersectionMotionDiv from "@/components/motions/intersection";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useBottomOverStore } from "@/store/bottom-over";
import { CalendarIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import React from "react";

const VacationItem = ({ vacation }: { vacation: Vacation }) => {
  vacation;
  const { openBottomOverWithPayload } = useBottomOverStore();

  return (
    <IntersectionMotionDiv className="w-full relative">
      <Alert className="text-white bg-zinc-600 ring-0 border-0 rounded-2xl">
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
          <span className="ml-auto text-emerald-300 font-bold text-lg">연차</span>
        </AlertDescription>
      </Alert>
    </IntersectionMotionDiv>
  );
};

export default VacationItem;

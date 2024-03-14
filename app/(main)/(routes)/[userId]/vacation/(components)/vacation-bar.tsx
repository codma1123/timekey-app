"use client";

import { AnimationProps, motion } from "framer-motion";
import StrechableAlert from "@/components/ui/stretchable-alert";
import { CalendarIcon } from "@radix-ui/react-icons";

const VacationBar = ({ date }: { date: number }) => {
  const enterTransition: AnimationProps["animate"] = {
    width: "70%",
    transition: {
      duration: 1,
      delay: 0.7,
      ease: "easeOut",
    },
  };

  const exitTransition: AnimationProps["animate"] = {
    width: "0px",
    transition: {
      duration: 0,
      delay: 0,
    },
  };

  return (
    <StrechableAlert
      className="text-white"
      alertClassName="bg-zinc-600"
      extend={(isOpen) => (
        <>
          <div className="mt-6">{new Date().toLocaleDateString()}</div>
          <div className="w-full h-4 rounded-lg bg-zinc-700 overflow-hidden">
            <motion.div
              className="rounded-lg h-4 bg-gradient-to-r from-emerald-500 to-emerald-200"
              initial={{ width: "0px" }}
              animate={isOpen ? enterTransition : exitTransition}
            />
          </div>
        </>
      )}
    >
      <CalendarIcon className="h-4 w-4" />
      <span className="ml-2">다음 연차까지</span>
      <span className="ml-auto mr-2 text-2xl">D-{date}</span>
    </StrechableAlert>
  );
};

export default VacationBar;

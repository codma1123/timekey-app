"use client";

import IntersectionMotionDiv from "@/components/motions/intersection";
import SlideDown from "@/components/motions/slide-down";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import StrechableAlert from "@/components/ui/stretchable-alert";
import TopLabel from "@/components/ui/top-label";
import { useScroll } from "@/hooks/scroll";
import { useAuthStore } from "@/store/auth";
import { CalendarIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { AnimationProps, motion } from "framer-motion";
import { CalendarDays, List } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useSyncExternalStore } from "react";

const VacationPage = () => {
  const router = useRouter();
  const { id } = useAuthStore();
  const date = 5;

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
      delay: 0.5,
    },
  };

  return (
    <>
      <TopLabel
        scrolledClassName="bg-primary-dark top-0 block"
        titleClassName="text-zinc-200"
        label="연차"
      />

      <SlideDown>
        <StrechableAlert
          className="text-white"
          extend={(isOpen) => (
            <>
              <div className=" mt-6">{new Date().toLocaleDateString()}</div>
              <div className="w-full h-4 rounded-lg bg-zinc-700 overflow-hidden">
                <motion.div
                  className="rounded-lg h-4 bg-gradient-to-r from-emerald-500 to-emerald-200"
                  initial={{ width: "0px" }}
                  animate={isOpen ? enterTransition : exitTransition}
                ></motion.div>
              </div>
            </>
          )}
        >
          <CalendarIcon className="h-4 w-4" />
          <span className="ml-2">다음 연차까지</span>
          <span className="ml-auto mr-2 text-2xl">D-{date}</span>
        </StrechableAlert>

        <Alert className="w-full text-white bg-zinc-600 ring-0 border-0 mt-4 rounded-2xl">
          <AlertDescription className="flex w-full items-center">
            <CalendarIcon className="h-4 w-4" />
            <span className="ml-2">잔여 연차</span>
            <span className="ml-auto mr-2 text-2xl">{date}</span>
          </AlertDescription>
        </Alert>
      </SlideDown>

      <SlideDown delay={0.3}>
        <motion.button
          className="py-4 w-full text-xl bg-emerald-400 text-white  transition-all duration-600 rounded-2xl "
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push(`/${id}/vacation/request`)}
        >
          연차 신청
        </motion.button>
      </SlideDown>
      <SlideDown
        className="flex flex-col gap-4"
        delay={0.4}
      >
        <div className="w-full text-white mt-4 flex">
          <div className="text-xl font-bold">연차 내역</div>
          <div className="ml-auto flex gap-x-2 items-center"></div>
        </div>
      </SlideDown>

      {Array.from({ length: 10 }).map((sample, index) => (
        <IntersectionMotionDiv
          key={index}
          className="w-full relative"
        >
          <Alert className="text-white bg-zinc-600 ring-0 border-0 rounded-2xl">
            <AlertDescription className="flex items-center">
              {/* badge */}
              <motion.div className="absolute top-[-6px] left-[-6px] rounded-full h-4 w-4 bg-emerald-300"></motion.div>

              <CalendarIcon className="h-5 w-5" />
              <span className="ml-4">{new Date().toLocaleDateString()}</span>
              <span className="ml-auto text-emerald-300 font-bold text-lg">연차</span>
            </AlertDescription>
          </Alert>
        </IntersectionMotionDiv>
      ))}
    </>
  );
};

export default VacationPage;

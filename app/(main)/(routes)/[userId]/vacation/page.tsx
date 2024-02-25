"use client";

import VacationList from "@/app/(main)/(routes)/[userId]/vacation/vacation-list";

import SlideDown from "@/components/motions/slide-down";
import { Alert, AlertDescription } from "@/components/ui/alert";
import StrechableAlert from "@/components/ui/stretchable-alert";
import TopLabel from "@/components/ui/top-label";
import { useAuthStore } from "@/store/auth";
import { useBottomOverStore } from "@/store/bottom-over";
import { CalendarIcon } from "@radix-ui/react-icons";
import { AnimationProps, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const VacationPage = () => {
  const router = useRouter();

  const { id } = useAuthStore();
  const { isOpen } = useBottomOverStore();

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
      delay: 0,
    },
  };

  const onRequestClick = useCallback(() => {
    router.push(`/${id}/vacation/request`, {});
  }, [router, id]);

  return (
    <main className="flex flex-col items-center min-h-screen min-w-screen gap-4 pt-16 px-6 text-white">
      <TopLabel
        scrolledClassName="bg-white top-0"
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
                />
              </div>
            </>
          )}
        >
          <CalendarIcon className="h-4 w-4" />
          <span className="ml-2">다음 연차까지</span>
          <span className="ml-auto mr-2 text-2xl">D-{date}</span>
        </StrechableAlert>

        <Alert className="w-full text-white bg-zinc-600 ring-0 border-0 mt-4 rounded-2xl">
          <AlertDescription className="pr-2">
            <div className="flex w-full items-center">
              <CalendarIcon className="h-4 w-4" />
              <span className="ml-2">잔여 연차</span>
              <span className="ml-auto text-2xl">{date}</span>
            </div>
          </AlertDescription>
        </Alert>

        <motion.button
          className="py-4 w-full text-xl bg-emerald-400 text-white transition-transform duration-600 rounded-2xl mt-4"
          whileTap={{ scale: 0.95 }}
          onClick={onRequestClick}
        >
          연차 신청
        </motion.button>
      </SlideDown>

      <VacationList id={"3"} />
    </main>
  );
};

export default VacationPage;

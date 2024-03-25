"use client";

import { useScale } from "@/hooks/motions/use-scale";
import { cn, getTimeDifference } from "@/lib/utils";
import { useTimeStore } from "@/store/time";
import { easeOut, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Lock, Unlock } from "lucide-react";
import { useModalStore } from "@/store/use-modal-store";
import { useWorkStore } from "@/store/work";
import { Report, User } from "@prisma/client";

interface EndWorkButtonProps {
  isWorkingAsync: boolean;
  report: Report;
  user: User;
}

const EndWorkButton = ({ isWorkingAsync, report, user }: EndWorkButtonProps) => {
  const { id: reportId } = report;
  const { endHour, endMinute } = user;

  const [isComplete, setIsComplete] = useState(false);
  const { scale } = useScale();

  const { currentTime, setCurrentTime } = useTimeStore();
  const isWork = useWorkStore((state) => state.isWork);
  const openWithAction = useModalStore((state) => state.openWithAction);

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const remainingTime = new Date();
  remainingTime.setHours(endHour, endMinute, 0, 0);

  const pathLength = 1 - ((remainingTime.getTime() - currentTime.getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) / 10;

  const visible = isWorkingAsync || isWork;

  return (
    <>
      {visible && (
        <motion.button
          className="relative z-100 top-[30%]"
          animate={{ translateY: "-20%" }}
          transition={{ delay: 1, duration: 0.3, ease: easeOut }}
          whileTap={{ scale: 0.95 }}
          onAnimationComplete={(e) => {
            setIsComplete(true);
          }}
          onClick={async (e) => {
            if (!isComplete) return;
            await scale();
          }}
        >
          <motion.div
            className={cn(
              "absolute left-1/2 top-1/2 z-50 translate-x-[-50%] translate-y-[-50%] text-[40px] font-extrabold flex flex-col items-center gap-4",
              pathLength < 0.5 ? "text-white" : "text-primary-dark"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            onClick={() => {
              openWithAction({
                type: "early-work-off",
                payload: { reportId },
              });
            }}
          >
            {pathLength < 0.5 ? (
              <Unlock
                className={cn("h-10 w-10", pathLength < 0.5 ? "text-white" : "text-primary-dark ")}
                strokeWidth={3}
              />
            ) : (
              <Lock
                className={cn("h-10 w-10", pathLength < 0.5 ? "text-white" : "text-primary-dark ")}
                strokeWidth={3}
              />
            )}

            <div>{getTimeDifference(remainingTime)}</div>
          </motion.div>
          <svg
            className="relative"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="300"
          >
            <defs>
              <linearGradient
                id="gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#F4D878" }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#F4D878" }}
                />
              </linearGradient>
            </defs>

            <motion.circle
              cx="50"
              cy="50"
              r="42"
              fill="#4d4d4d"
              initial={{ fill: "#8D7B68", scale: 0 }}
              animate={{ fill: "#39332C", scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            />

            <motion.circle
              cx="50"
              cy="50"
              r="36"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              fill={pathLength < 0.5 ? "#39332C" : "#F4D878"}
              transition={{ duration: 0.4, delay: 0.6, ease: "easeInOut" }}
            />

            <motion.path
              d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
              stroke="url(#gradient)"
              fill="transparent"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength }}
              transition={{ duration: 0.46, ease: "easeInOut" }}
            />
          </svg>
        </motion.button>
      )}
    </>
  );
};

export default EndWorkButton;

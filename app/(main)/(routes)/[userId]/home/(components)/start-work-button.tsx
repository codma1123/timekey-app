"use client";

import { useWorkStore } from "@/store/work";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { Report, User } from "@prisma/client";
import axios from "axios";
import { PanInfo, motion, useAnimation } from "framer-motion";
import { Key } from "lucide-react";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";

interface StartWorkButtonProps {
  user: User;
  report: Report;
  isWorkingAsync: boolean;
  locationId: string;
}

const StartWorkButton = ({ isWorkingAsync, report, user, locationId }: StartWorkButtonProps) => {
  const { id: reportId } = report;
  const { id: userId } = user;

  const controls = useAnimation();
  const [pos, setPos] = useState(0);
  const [workOn, isStoreWork] = useWorkStore(useShallow((state) => [state.workOn, state.isWork]));

  const onDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const dragDistance = Math.sqrt(info.offset.x ** 2 + info.offset.y ** 2);
    setPos(dragDistance);
  };

  useEffect(() => {
    return () => controls.stop();
  }, []);

  const onDragEnd = async () => {
    await Haptics.impact({ style: ImpactStyle.Light });
    await axios.put("/api/work/start", {
      userId,
      reportId,
      locationId,
    });

    setPos(0);
    workOn();
  };

  return (
    !isStoreWork &&
    !isWorkingAsync && (
      <>
        <motion.div
          className="mt-[50%]"
          animate={controls}
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          dragTransition={{ bounceDamping: 10 }}
          dragElastic={0.5}
          onDrag={onDrag}
          onDragEnd={onDragEnd}
        >
          <Key className="h-24 w-24 text-main" />
        </motion.div>

        {pos === 0 && !isStoreWork && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-2xl text-main font-bold mt-2"
          >
            아래로 끌어내리세요
          </motion.p>
        )}
        {!isStoreWork && (
          <motion.div
            className="absolute bottom-24 text-3xl text-white w-full text-center rounded-bottombg-primary-dark font-bold"
            animate={{
              opacity: pos > 300 ? 1 : 0,
              y: pos > 300 ? -20 : 0,
            }}
          >
            출근 !
          </motion.div>
        )}
      </>
    )
  );
};

export default StartWorkButton;

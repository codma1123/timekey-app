import { useState } from "react";
import { keySharp, notifications, lockClosed } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

interface LockButtonProps {
  active: boolean;
  onClick: () => void;
  onUnLockingDeny: () => void;
}

const LockButton = ({ active, onClick, onUnLockingDeny }: LockButtonProps) => {
  const controls = useAnimation();

  const onButtonClick = async () => {
    await Haptics.impact({ style: ImpactStyle.Medium });

    if (active) {
      onClick();
      return;
    }

    await controls.start({
      x: [-6, 6, -4, 4, -2, 2, -0, 0, 0],
      transition: { duration: 0.5 },
    });

    await controls.start({ x: 0 });

    onUnLockingDeny();
  };

  return (
    <div>
      <motion.div
        className={`flex justify-center items-center h-64 w-64 mt-16 rounded-full  ${active ? "bg-primary-dark" : "bg-primary"}`}
        onClick={onButtonClick}
        whileTap={{ scale: 0.95 }}
        animate={controls}
      >
        <div>
          <IonIcon
            icon={active ? keySharp : lockClosed}
            size="large"
            color={active ? "light" : "secondary"}
            style={{ zoom: 4.0 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LockButton;

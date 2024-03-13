"use client";

import { cn } from "@/lib/utils";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { motion } from "framer-motion";
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = ({ className }: { className?: string }) => {
  const router = useRouter();

  return (
    <motion.button
      className={cn("absolute top-[7.5%] right-6 group bg-primary-dark p-2 rounded-full z-50", className)}
      onClick={async () => {
        await Haptics.impact({ style: ImpactStyle.Medium });
        router.back();
      }}
    >
      <Undo2 className="w-8 h-8 text-white group-active:text-main group-active:scale-110 transition" />
    </motion.button>
  );
};

export default BackButton;

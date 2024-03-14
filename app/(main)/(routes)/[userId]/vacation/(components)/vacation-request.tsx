"use client";

import { useAuthStore } from "@/store/auth";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const VacationRequest = () => {
  const router = useRouter();

  const { id } = useAuthStore();

  const onRequestClick = useCallback(() => {
    router.push(`/${id}/vacation/request`, {});
  }, [router, id]);

  return (
    <motion.button
      className="py-4 w-full text-xl bg-emerald-400 text-white transition-transform duration-600 rounded-2xl mt-4"
      whileTap={{ scale: 0.95 }}
      onClick={onRequestClick}
    >
      연차 신청
    </motion.button>
  );
};

export default VacationRequest;

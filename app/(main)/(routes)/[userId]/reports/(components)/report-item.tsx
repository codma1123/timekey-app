"use client";

import IntersectionMotionDiv from "@/components/motions/intersection";
import { useAuthStore } from "@/store/auth";
import { Report } from "@/types/report";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ReportItemProps {
  report: Report;
  children?: ReactNode;
}

const ReportItem = ({ report }: ReportItemProps) => {
  const router = useRouter();
  const userId = useAuthStore((state) => state.id);
  const { date, id } = report;

  return (
    <IntersectionMotionDiv initial>
      <motion.div
        onClick={() => router.push(`/${userId}/reports/${id}`)}
        className="p-2 flex justify-center items-center min-w-[100px] h-[100px] text-white bg-content rounded-xl text-sm shadow-xl"
      >
        {date.toLocaleDateString()}
      </motion.div>
    </IntersectionMotionDiv>
  );
};

export default ReportItem;

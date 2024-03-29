"use client";

import ReportItem from "@/app/(main)/(routes)/[userId]/reports/(components)/report-item";
import { Report } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const ReportList = ({ reports }: { reports: Report[] }) => {
  return (
    <AnimatePresence>
      {reports.map((report, i) => (
        <motion.div
          key={report.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <ReportItem
            report={report}
            key={i}
          />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default ReportList;

"use client";

import { Report } from "@/types/report";
import { ReactNode } from "react";

interface ReportItemProps {
  report: Report;
  children?: ReactNode;
}

const ReportItem = ({ children, report }: ReportItemProps) => {
  return <div className="p-2 flex justify-center items-center min-w-[100px] h-[100px] text-white bg-content rounded-xl text-sm shadow-xl">{report.date.toLocaleDateString()}</div>;
};

export default ReportItem;

import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ReportLoading = () => {
  return (
    <>
      <Skeleton className="h-8 mt-3 w-24 rounded-2xl bg-content self-start" />
      <Skeleton className="h-6 w-16 mt-4 rounded-2xl bg-content self-start" />
      <Skeleton className="h-6 w-48 rounded-2xl bg-content self-start" />

      <Skeleton className="h-6 w-16 text-md mt-4  rounded-2xl bg-content self-start" />
      <Skeleton className="h-6 w-48 rounded-2xl bg-content self-start" />

      <Skeleton className="h-6 w-16 mt-4 rounded-2xl bg-content self-start" />
      <Skeleton className="h-6 w-48 rounded-2xl bg-content self-start" />

      <Skeleton className="h-16 w-full mt-4 rounded-2xl bg-content self-start" />
    </>
  );
};

export default ReportLoading;

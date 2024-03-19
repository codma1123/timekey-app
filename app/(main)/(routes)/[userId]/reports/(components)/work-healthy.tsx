"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { ClockIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const WorkHealthy = ({ healthyRate, userId }: { healthyRate: number; userId: number }) => {
  const router = useRouter();

  return (
    <Alert
      className="border-0 bg-content rounded-2xl h-16 mt-4"
      onClick={() => router.push(`/${userId}/reports/work-healthy`)}
    >
      <AlertDescription className="pr-2 flex items-center h-full">
        <ClockIcon className="h-4 w-4" />
        <span className="ml-2"> 근무 건전도 </span>
        <span className={cn("ml-auto text-2xl font-bold", healthyRate > 95 ? "text-emerald-400" : "text-yellow-400")}> {healthyRate} % </span>
      </AlertDescription>
    </Alert>
  );
};

export default WorkHealthy;

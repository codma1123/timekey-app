"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Location } from "@prisma/client";

import { Hotel } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface ReportLocationProps {
  userId: string;
  location: Location;
}

const ReportLocation = ({ location, userId }: ReportLocationProps) => {
  const router = useRouter();
  const { name, address } = location;

  return (
    <Alert
      className="border-0 bg-content rounded-2xl mt-4 flex items-center"
      onClick={() => router.push(`/${userId}/home/map?locationId=${location.id}`)}
    >
      <div>
        <Hotel className="my-auto" />
      </div>
      <div className="ml-4">
        <AlertTitle>근무지</AlertTitle>
        <AlertDescription className="mt-2">{name}</AlertDescription>
      </div>
      <div className="ml-auto self-end text-zinc-400 text-sm">{address}</div>
    </Alert>
  );
};

export default ReportLocation;

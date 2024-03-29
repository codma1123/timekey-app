"use client";

import { checkValidLocationRequest } from "@/api/local/check-valid-location-request";
import { cn } from "@/lib/utils";
import { Geolocation } from "@capacitor/geolocation";
import { Location } from "@prisma/client";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import React from "react";
import { useEffect, useState } from "react";

const ValidLocationAlert = ({ className }: { className?: string }) => {
  const [validLocations, setValidLocations] = useState<Location[]>([]);

  useEffect(() => {
    const checkValidLocation = async () => {
      try {
        const { coords } = await Geolocation.getCurrentPosition();
        const validLocationsResponse = await checkValidLocationRequest(coords);
        setValidLocations(validLocationsResponse);
      } catch (e) {
        console.log(e);
      }
    };

    checkValidLocation();
  }, []);

  return (
    <div className={cn("absolute top-[7.5%] left-6  rounded-xl text-sm z-50 p-2 px-3 text-white font-bold", validLocations.length > 0 ? "bg-sky-400" : "bg-rose-600", className)}>
      {validLocations.length > 0 ? (
        <span className="flex gap-x-2 items-center">
          <CheckCircle2 className="w-4 h-4 " />
          현재 퇴근 지역에 위치하고 있습니다.
        </span>
      ) : (
        <span className="flex gap-x-2 items-center ">
          <AlertCircle className="w-4 h-4 " />
          현재 퇴근 지역에 위치하고 있지 않습니다
        </span>
      )}
    </div>
  );
};

export default React.memo(ValidLocationAlert);

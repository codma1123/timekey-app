"use client";

import LocationBottomOver from "@/components/bottom-overs/location-bottom-over";
import VacationDetailBottomOver from "@/components/bottom-overs/vacation-detail-bottom-over";
import { useEffect, useState } from "react";

export const BottomOverProvider = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <VacationDetailBottomOver />
      <LocationBottomOver />
    </>
  );
};

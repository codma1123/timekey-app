"use client";

import EalryWorkoffModal from "@/components/modals/early-workoff-modal";
import LoadingModal from "@/components/modals/loading-modal";
import VacationModal from "@/components/modals/vacation-modal";
import WorkoffModal from "@/components/modals/workoff-modal";
import { useEffect, useState } from "react";

export const ModalProvider = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <LoadingModal />
      <EalryWorkoffModal />
      <WorkoffModal />
      <VacationModal />
    </>
  );
};

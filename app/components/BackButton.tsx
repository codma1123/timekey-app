"use client";

import { Haptics, ImpactStyle } from "@capacitor/haptics";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const BackButton = ({ className }: { className?: string }) => {
  const router = useRouter();

  const handleBackButton = async () => {
    await Haptics.impact({ style: ImpactStyle.Light });
    router.back();
  };

  return (
    <button
      className={classNames("mt-16 text-4xl", className)}
      onClick={handleBackButton}
    >
      <ArrowLeftIcon className="h-8 w-8" />
    </button>
  );
};

export default BackButton;

"use client";

import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const TopNavs = ({ userId }: { userId: UUID }) => {
  const router = useRouter();

  return (
    <div className="absolute top-[7.5%] right-6 flex items-center gap-x-2">
      <button className="group bg-primary-dark p-2 rounded-full">
        <MapPin
          className="w-8 h-8 text-secondary group-active:text-main group-active:scale-110 transition"
          onClick={() => {
            router.push(`/${userId}/home/map`);
          }}
        />
      </button>
    </div>
  );
};

export default React.memo(TopNavs);

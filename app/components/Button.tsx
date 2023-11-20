"use client";

import { ReactNode, useEffect } from "react";
import { Share } from "@capacitor/share";

export default function Button({ children }: { children: ReactNode }) {
  const share = async () => {
    await Share.share({
      title: "헉 !",
      url: "www.naver.com",
    });
  };

  useEffect(() => {
    console.log("mount");
  }, []);

  return (
    <button
      className="bg-indigo-400 w-full text-white p-3 rounded-xl"
      onClick={() => share()}
    >
      {children}
    </button>
  );
}

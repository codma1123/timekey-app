"use client";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import BackSwipe from "@/components/motions/back-swipe";

const SignUpLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const handleBackButton = async () => {
    await Haptics.impact({ style: ImpactStyle.Light });
    router.back();
  };

  return (
    <body>
      <main>
        <BackSwipe className="px-8 h-min-screen">
          <button
            className="mt-16 text-4xl"
            onClick={handleBackButton}
          >
            <ArrowLeftIcon className="h-8 w-8" />
          </button>

          <div className="mt-4 text-4xl">회원가입</div>
          {children}
        </BackSwipe>
      </main>
    </body>
  );
};

export default SignUpLayout;

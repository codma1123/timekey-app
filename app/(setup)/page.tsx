"use client";

import { IonContent, IonPage, setupIonicReact, useIonToast } from "@ionic/react";
import NoSSRWrapper from "@/app/components/NoSSRWrapper";
import { Capacitor } from "@capacitor/core";
import BottomNav from "@/app/components/BottomNav";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LockButton from "@/app/components/LockButton";
import useAsyncState from "@/hooks/async-setter";
import TopNav from "@/app/components/TopNav";
import { currentUser } from "@/lib/current-user";
import { redirect } from "next/navigation";

setupIonicReact();

export default async function SetupPage() {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [isUnLockDeny, setIsUnLockDeny] = useAsyncState();

  const logined = await currentUser();

  if (!logined) {
    return redirect("/sign-in");
  }

  return (
    <NoSSRWrapper>
      {
        Capacitor.isNativePlatform()
        // <IonHeader>
        //   <IonToolbar color="primary">
        //     <IonTitle></IonTitle>
        //   </IonToolbar>
        // </IonHeader>
      }
      <IonPage>
        <main className={`flex flex-col items-center h-screen w-screen p-5 pt-16 bg-primary absolute top-0 transition-all duration-500 ${isActive ? "bg-primary" : "bg-primary-dark"}`}>
          <TopNav />

          <LockButton
            active={isActive}
            onClick={() => setIsActive((active) => !active)}
            onUnLockingDeny={setIsUnLockDeny}
          />

          {/* <div className="text-neutral-100 text mt-5">{isActive ? "사무실 문을 열어보세요!" : "열심히 일하는 중이에요."}</div> */}
          <AnimatePresence>
            {isUnLockDeny && (
              <motion.p
                className=" text-white mt-4 text-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                아직 퇴근 할 시간이 아니에요.
              </motion.p>
            )}
          </AnimatePresence>

          <BottomNav />
        </main>
      </IonPage>
    </NoSSRWrapper>
  );
}

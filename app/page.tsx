"use client";

import Button from "@/app/components/Button";
import { IonContent, IonHeader, IonTitle, IonToolbar, setupIonicReact } from "@ionic/react";
import NoSSRWrapper from "@/app/components/NoSSRWrapper";
import { Capacitor } from "@capacitor/core";
import Card from "@/app/components/Card";
import InitPage from "@/init/page";

setupIonicReact();

export default function Home() {
  return (
    <NoSSRWrapper>
      {Capacitor.isNativePlatform() && (
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle></IonTitle>
          </IonToolbar>
        </IonHeader>
      )}{" "}
      <main className="flex min-h-screen p-5 bg-blue-00">
        컴파일 ..
        <div>
          <InitPage />
        </div>
      </main>
    </NoSSRWrapper>
  );
}

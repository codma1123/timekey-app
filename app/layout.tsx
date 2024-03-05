import type { Metadata, Viewport } from "next";

import "./globals.css";

import { ModalProvider } from "@/components/provider/modal-provider";
import AppProvider from "@/components/provider/app";
import { BottomOverProvider } from "@/components/provider/bottom-over-provider";

export const metadata: Metadata = {
  title: "TIMEKEY",
  description: "TIMEKEY Generate By Codma & Somini",
  applicationName: "TIMEKEY",
};

export const viewport: Viewport = {
  width: "device-width",
  viewportFit: "cover",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <ModalProvider />
      <BottomOverProvider />
      <AppProvider />

      {children}
    </html>
  );
}

import type { Metadata, Viewport } from "next";

import "./globals.css";

import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/core.css";

export const metadata: Metadata = {
  title: "TEST",
  description: "Generated by TEST",
  applicationName: "TEST",
};

export const viewport: Viewport = {
  viewportFit: "cover",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
    >
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}

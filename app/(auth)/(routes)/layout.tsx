import React, { ReactNode } from "react";
import { DOSIS } from "@/lib/fonts/dosis";
import { IBM_KR } from "@/lib/fonts/ibm-kr";
import { cn } from "@/lib/utils";

import "@/app/globals.css";

const SignLayout = ({ children }: { children: ReactNode }) => {
  return <body className={cn(DOSIS.className, IBM_KR.className)}>{children}</body>;
};

export default SignLayout;

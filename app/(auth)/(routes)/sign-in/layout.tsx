import PageTransition from "@/components/motions/page-transition";
import { ReactNode } from "react";

const SignInLayout = ({ children }: { children: ReactNode }) => {
  return (
    <body className="bg-white">
      <PageTransition>
        <div className="h-max-screen pt-12 px-8 flex gap-4 flex-col text-text bg-white">{children}</div>
      </PageTransition>
    </body>
  );
};

export default SignInLayout;

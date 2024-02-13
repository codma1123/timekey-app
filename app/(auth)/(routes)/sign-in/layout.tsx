import PageTransitionLayout from "@/app/components/PageTransition";
import { ReactNode } from "react";

const SignInLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <body className="bg-white">
      <PageTransitionLayout>
        <div className="h-max-screen pt-12 px-8 flex gap-4 flex-col text-text bg-white">{children}</div>
      </PageTransitionLayout>
    </body>
  );
};

export default SignInLayout;

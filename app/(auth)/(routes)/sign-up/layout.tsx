import BackButton from "@/app/components/BackButton";
import BackSwiperWrapper from "@/app/components/BackSwiperWrapper";
import { ReactNode } from "react";

const SignUpLayout = ({ children }: { children: ReactNode }) => {
  return (
    <body>
      <main>
        <BackSwiperWrapper className="px-8 h-min-screen">
          <BackButton />

          <div className="mt-4 text-4xl">회원가입</div>
          {children}
        </BackSwiperWrapper>
      </main>
    </body>
  );
};

export default SignUpLayout;

"use client";

import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { SignUpForm } from "@/store/auth/type";

import { Form, FormField } from "@/components/ui/form";
import FormInput from "@/components/ui/form-input";

import { useEffect, useRef, useState } from "react";
import { delay } from "@/lib/delay";
import { useAuthStore } from "@/store/auth";
import { useGlobalLoading } from "@/store/global-loading";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/pagination";
import SlideDown from "@/components/motions/slide-down";
import { Keyboard } from "@capacitor/keyboard";
import { motion } from "framer-motion";
import BackSwipe from "@/components/motions/back-swipe";
import TopLabel from "@/components/ui/top-label";
import { cn } from "@/lib/utils";

const schema = yup.object().shape({
  email: yup.string().required("필수값 입니다.").email("유효한 이메일 형식이 아닙니다."),
  password: yup.string().min(8, "최소 8자 이상이여야 합니다.").matches(/^\S*$/, "공백 없이 입력해주세요.").required("필수값 입니다."),
  name: yup.string().required("필수값 입니다."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("필수값 입니다."),
  phoneNumber: yup.string().required("필수값 입니다."),
});

const SignIn = () => {
  const form = useForm<SignUpForm>({
    resolver: yupResolver(schema),
    reValidateMode: "onBlur",
    mode: "onChange",
  });

  const router = useRouter();
  const { signUp } = useAuthStore();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const phoneNumberRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const { name, phoneNumber, password, confirmPassword } = useWatch({ control: form.control });
  const { setLoading } = useGlobalLoading();

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    if (confirmPassword !== "" && confirmPassword === password) {
      (document.activeElement as HTMLInputElement).blur();
    }
  }, [confirmPassword]);

  useEffect(() => {
    const isMobileWebView = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobileWebView) {
      Keyboard.addListener("keyboardWillShow", () => setIsKeyboardOpen(true));
      Keyboard.addListener("keyboardWillHide", () => setIsKeyboardOpen(false));
    }

    delay(500).then(() => nameRef.current.focus());

    return () => {
      Keyboard.removeAllListeners();
    };
  }, []);

  return (
    <BackSwipe>
      <main className="flex flex-col items-center h-screen w-screen gap-4 transition-all duration-500 pt-16 px-6">
        <TopLabel
          className="text-black"
          scrolledClassName="bg-main text-primary-dark top-0 block"
          label="회원가입"
        />

        <div className="w-full px-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((form) => {
                setLoading(true);
                signUp(form)
                  .then(() => router.push("/sign-up/success"))
                  .catch(() => {})
                  .finally(() => setLoading(false));
              })}
            >
              <SlideDown>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormInput
                      el={nameRef}
                      label="이름"
                      autofocus
                      {...field}
                    />
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormInput
                      el={phoneNumberRef}
                      form={form}
                      label="휴대전화"
                      type="tel"
                      {...field}
                    />
                  )}
                />
              </SlideDown>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormInput
                    el={emailRef}
                    label="이메일"
                    {...field}
                    type="email"
                  />
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormInput
                    label="비밀번호"
                    {...field}
                    type="password"
                  />
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormInput
                    label="비밀번호 확인"
                    {...field}
                    type="password"
                  />
                )}
              />

              <motion.button
                animate={{ bottom: isKeyboardOpen ? -100 : 0, opacity: isKeyboardOpen ? 0 : 1 }}
                transition={{ duration: 0 }}
                disabled={!form.formState.isValid}
                className="absolute transition-all h-24 w-full bottom-0 left-0 text-primary text-2xl rounded-none disabled:opacity-25 disabled:text-gray-500 bg-main active:bg-main focus:bg-none rounded-tl-3xl rounded-tr-3xl"
              >
                회원가입
              </motion.button>
            </form>
          </Form>
        </div>
      </main>
    </BackSwipe>
  );
};

export default SignIn;

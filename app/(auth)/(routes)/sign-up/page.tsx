"use client";

import SlideDownWrapper from "@/app/components/motions/SlideDownWrapper";

import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { SignUpForm } from "@/store/auth/type";

import { Form, FormField } from "@/components/ui/form";
import FormInput from "@/components/ui/form-input";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";

import { useCallback, useEffect, useRef, useState } from "react";
import { delay } from "@/lib/delay";
import { useAuthStore } from "@/store/auth";
import { useGlobalLoading } from "@/store/global-loading";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/pagination";

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
  const [swiper, setSwiper] = useState<SwiperCore>();
  const { signUp } = useAuthStore();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const phoneNumberRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const { name, phoneNumber, password, confirmPassword } = useWatch({ control: form.control });
  const { setLoading } = useGlobalLoading();

  useEffect(() => {
    if (name && name.length === 3) delay(300).then(() => phoneNumberRef.current.focus());
  }, [name]);

  useEffect(() => {
    if (name && phoneNumber && phoneNumber.length === 13) swipe();
  }, [phoneNumber]);

  useEffect(() => {
    if (confirmPassword !== "" && confirmPassword === password) {
      (document.activeElement as HTMLInputElement).blur();
    }
  }, [confirmPassword]);

  useEffect(() => {
    delay(500).then(() => nameRef.current.focus());
  }, []);

  const swipe = useCallback(async () => {
    (document.activeElement as HTMLInputElement).blur();
    await delay(500);
    swiper.slideNext();
    await delay(500);
    emailRef.current.focus();
  }, [swiper]);

  return (
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
        <Swiper
          onSwiper={setSwiper}
          preventInteractionOnTransition={true}
          noSwiping
          noSwipingClass="swiper-no-swiping"
          modules={[Navigation]}
          speed={300}
        >
          <SwiperSlide>
            <SlideDownWrapper>
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
            </SlideDownWrapper>
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>
        <button
          disabled={!form.formState.isValid}
          className="absolute transition-all h-24 w-screen p-0 bottom-0 left-0 text-primary text-2xl rounded-none  disabled:opacity-75 disabled:text-gray-500 bg-main active:bg-main focus:bg-none"
        >
          회원가입
        </button>
      </form>
    </Form>
  );
};

export default SignIn;

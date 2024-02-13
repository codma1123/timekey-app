"use client";

import { Form, FormField } from "@/components/ui/form";
import FormInput from "@/components/ui/form-input";
import TimeKey from "@/public/icons/TIMEKEY.svg";
import { SignInform } from "@/store/auth/type";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useRouter, redirect } from "next/navigation";
import { useAuthStore } from "@/store/auth";
import { useGlobalLoading } from "@/store/global-loading";

const schema = yup.object().shape({
  email: yup.string(),
  password: yup.string(),
});

const SignIn = () => {
  const form = useForm<SignInform>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();
  const { signIn } = useAuthStore();
  const { setLoading } = useGlobalLoading();

  const onSubmit = (e: SignInform) => {
    const id = uuidv4();
    router.push(`/${id}/home`);
  };

  return (
    <main>
      <TimeKey className="mx-auto my-16" />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((form) => {
            const id = uuidv4();
            router.push(`/${id}/home`);
            return;

            setLoading(true);
            signIn(form)
              .then(() => {
                const id = uuidv4();
                router.push(`/${id}/home`);
              })
              .catch(() => {})
              .finally(() => setLoading(false));
          })}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormInput
                label="이메일"
                {...field}
                autofocus
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

          <div className="flex justify-end gap-3 mt-3 underline text-black">
            <Link href="/sign-up">회원가입</Link>
            <div>비밀번호 찾기</div>
          </div>

          <button className="bg-main text-primary py-4 mt-4 w-full rounded-md active:scale-95 transition-all">로그인</button>
        </form>
      </Form>
    </main>
  );
};

export default SignIn;

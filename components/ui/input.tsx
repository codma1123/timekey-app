"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import React, { ChangeEvent, HTMLAttributes, HTMLInputTypeAttribute, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ControllerRenderProps, FieldError, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T = any> extends MotionProps, ControllerRenderProps<any> {
  closeable?: boolean;
  className?: string;
  type?: HTMLInputTypeAttribute;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];

  register?: UseFormRegister<T>;
  error?: FieldError;
  placeholder?: string;
  autofocus?: boolean;

  effect?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, closeable, type, inputMode, name, error, placeholder, autofocus, effect, register, ref: setRef, ...rest }, ref) => {
  const hookFormAttrs = useMemo(() => (name && register ? register(name as string) : {}), [register]);

  const [isBlur, setIsBlur] = useState(false);

  return (
    <motion.input
      className={cn(
        "w-full bg-none h-14 px-0 py-0 box-border focus:border-b-2 focus:bg-none border-text rounded-none text-black transition-all text-2xl font-bold z-0",
        isBlur && "bg-zinc-100/90 px-2 rounded-2xl opacity-40"
      )}
      name={name as string}
      type={type}
      ref={ref}
      placeholder={placeholder}
      inputMode={inputMode}
      {...rest}
      {...hookFormAttrs}
      value={rest.value || ""}
      onChange={(e) => {
        rest.onChange(e);
        effect && effect(e);
      }}
      onFocus={() => setIsBlur(false)}
      onBlur={() => {
        rest.onBlur();
        setIsBlur(true);
      }}
    />
  );
});

export default Input;

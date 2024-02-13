import { ChangeEvent, HTMLInputTypeAttribute, MutableRefObject, forwardRef, memo, useCallback } from "react";
import React from "react";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import Input from "@/app/components/Input";
import { hyphen } from "@/utils/hyphen";

interface FormItemProps<T> extends ControllerRenderProps<T> {
  autofocus?: boolean;
  type?: HTMLInputTypeAttribute;
  label?: string;
  form?: UseFormReturn;
  el?: MutableRefObject<HTMLInputElement | null>;
}

const FormInput = forwardRef(({ autofocus, type, label, form, el, ...rest }: FormItemProps<any>, ref) => {
  const addHyphen = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    form.setValue("phoneNumber", hyphen(e.target.value));
  }, []);

  return (
    <FormItem className="relative">
      <div className="text-md mt-6">{label}</div>
      <FormControl>
        <Input
          ref={el}
          effect={type === "tel" && addHyphen}
          type={type}
          autofocus={autofocus}
          {...rest}
        />
      </FormControl>
      <FormMessage className="text-red-400 absolute top-[-4px] right-0" />
    </FormItem>
  );
});

export default memo(FormInput);

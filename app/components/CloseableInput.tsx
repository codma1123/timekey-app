"use client";

import { IonIcon } from "@ionic/react";
import classNames from "classnames";
import { closeCircle } from "ionicons/icons";
import { motion, useAnimation } from "framer-motion";
import React, { ChangeEvent, FocusEvent, HTMLAttributes, HTMLInputTypeAttribute, MutableRefObject, useEffect, useRef, useState } from "react";
import { FieldError, Path, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

interface CloseableInputProp<T> {
  className?: string;
  name?: Path<T>;
  type?: HTMLInputTypeAttribute;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  onFocus?: (e: FocusEvent<HTMLInputElement>, ref: MutableRefObject<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent) => void;
  register?: UseFormRegister<T>;
  tabIndex?: number;
  error?: FieldError;
}

const CloseableInput = <T,>(props: CloseableInputProp<T> = { type: "text" }) => {
  const inputWrapperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [closeButtonVisible, setCloseButtonVisible] = useState<boolean>(false);

  const controls = useAnimation();
  const shakeControls = useAnimation();

  const onCloseButtonClick = async () => {
    setCloseButtonVisible(false);
  };

  const onFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = "#fff";
    e.target.style.border = "8px";
    e.target.style.borderRadius = "16px";
    props.onFocus && props.onFocus(e, inputRef);
  };

  const onBlur = async (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = "#fcfcfc";
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCloseButtonVisible(e.target.value !== "");
    props.onChange && props.onChange(e);
  };

  useEffect(() => {
    if (closeButtonVisible) {
      controls.start({
        opacity: 1,
        transition: { duration: 0.125 },
      });
    } else {
      controls
        .start({
          opacity: 0,
          transition: { duration: 0.125 },
        })
        .then(() => controls.stop());
    }
  }, [closeButtonVisible]);

  useEffect(() => {
    if (props.error) {
      Haptics.impact({ style: ImpactStyle.Heavy });

      shakeControls.start({
        x: [-10, 10, -10, 10, 0],
        outlineColor: "#000",
        transition: {
          duration: 0.3,
        },
      });
    }
  }, [props.error]);

  return (
    <div
      className="w-full relative"
      ref={inputWrapperRef}
    >
      <motion.input
        className={classNames("w-full bg-input rounded-3xl h-14 px-6 transition-all duration-150 outline-4 text-md font-bold", props.className)}
        name={props.name}
        type={props.type}
        inputMode={props.inputMode}
        onFocus={onFocus}
        tabIndex={props.tabIndex}
        animate={props.error ? shakeControls : {}}
      />

      {closeButtonVisible && (
        <motion.div
          className="absolute right-3 top-1/2 -translate-y-1/2 text-3xl active:scale-95"
          animate={controls}
          initial={{ opacity: 0 }}
          onClick={onCloseButtonClick}
          layout="size"
        >
          <IonIcon
            icon={closeCircle}
            className=" text-gray-400"
          />
        </motion.div>
      )}
    </div>
  );
};

export default CloseableInput;

"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer";
import { useState } from "react";

import { StandardTime } from "@/api/db/auth/set-user-standard-time";
import axios from "axios";

type RadioValue = "option-one" | "option-two" | "option-three";

const RadioValueMap: Record<RadioValue, { start: StandardTime; end: StandardTime }> = {
  "option-one": {
    start: {
      hour: 8,
      minute: 50,
    },
    end: {
      hour: 17,
      minute: 40,
    },
  },
  "option-two": {
    start: {
      hour: 9,
      minute: 0,
    },
    end: {
      hour: 18,
      minute: 0,
    },
  },
  "option-three": {
    start: {
      hour: 10,
      minute: 0,
    },
    end: {
      hour: 19,
      minute: 0,
    },
  },
};

const SetUserStandardTimeBottomOver = ({ userId }: { userId: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [radioValue, setRadioValue] = useState<RadioValue>("option-one");

  const onButtonClick = async () => {
    const { start, end } = RadioValueMap[radioValue];

    await axios.put("/api/user/set-user-standard-time", {
      userId,
      start,
      end,
    });

    setIsOpen(false);
  };

  return (
    <Drawer open={isOpen}>
      <DrawerTrigger className="hidden"></DrawerTrigger>
      <DrawerContent className="bg-white ring-0 outline-none border-none h-full text-black">
        <DrawerHeader className="text-left mt-8">
          <div className="text-2xl">출퇴근 시간 설정</div>
          <div className="text-gray-600 ml-2 text-md"> 출퇴근 기준 시간을 설정 해 주세요</div>
        </DrawerHeader>

        <DrawerDescription className="flex flex-col px-4 w-full gap-4 my-auto">
          <RadioGroup
            defaultValue="option-one"
            onValueChange={(value: RadioValue) => setRadioValue(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-one"
                id="option-one"
                className="text-primary-dark h-6 w-6"
              />
              <Label
                htmlFor="option-one"
                className="text-xl"
              >
                8:50 출근 17:40 퇴근
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-two"
                id="option-two"
                className="text-primary-dark h-6 w-6"
              />
              <Label
                htmlFor="option-two"
                className="text-xl"
              >
                9:00 출근 18:00 퇴근
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-three"
                id="option-three"
                className="text-primary-dark h-6 w-6"
              />
              <Label
                htmlFor="option-two"
                className="text-xl"
              >
                10:00 출근 19:00 퇴근
              </Label>
            </div>
          </RadioGroup>
        </DrawerDescription>

        <DrawerFooter className="text-center">
          <button
            onClick={onButtonClick}
            className="mb-4 w-full bg-blue-400 text-white py-4 rounded-3xl text-xl"
          >
            확인
          </button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SetUserStandardTimeBottomOver;

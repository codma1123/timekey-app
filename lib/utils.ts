import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const delay = (timeout: number = 1000) => new Promise((resolve) => setTimeout(resolve, timeout));

export const getTimeDiffrence = (targetDate: Date) => {
  const timeDifference = targetDate.getTime() - new Date().getTime();

  return {
    hoursDifference: (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    minutesDifference: (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
    secondsDifference: (timeDifference % (1000 * 60)) / 1000,
  };
};

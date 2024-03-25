import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getTimeDifference = (targetDate: Date): string => {
  const timeDifference = targetDate.getTime() - new Date().getTime();

  const hoursDifference = (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
  const minutesDifference = (timeDifference % (1000 * 60 * 60)) / (1000 * 60);
  const secondsDifference = (timeDifference % (1000 * 60)) / 1000;

  return `${Math.floor(hoursDifference)}:${Math.floor(minutesDifference).toString().padStart(2, "0")}:${Math.floor(secondsDifference).toString().padStart(2, "0")}`;
};

export const toDateFormat = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" });
  formatter.format;
  const [{ value: year }, , { value: month }, , { value: day }] = formatter.formatToParts(date);

  return `${year}-${month}-${day}`;
};

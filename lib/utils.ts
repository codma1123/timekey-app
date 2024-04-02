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

export const getWorkTime = (startDate: Date, endDate: Date) => {
  const diff = Math.abs(endDate.getTime() - startDate.getTime());

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return { hours, minutes };
};

export const toDateFormat = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" });
  formatter.format;
  const [{ value: year }, , { value: month }, , { value: day }] = formatter.formatToParts(date);

  return `${year}-${month}-${day}`;
};

export const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371e3;

  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

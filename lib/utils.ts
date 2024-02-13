import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const delay = (timeout: number = 1000) => new Promise((resolve) => setTimeout(resolve, timeout));

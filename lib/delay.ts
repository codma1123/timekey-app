import { Vacation } from "@/types/vacation";

export const delay = (timeout: number = 1000) => new Promise((resolve) => setTimeout(resolve, timeout));

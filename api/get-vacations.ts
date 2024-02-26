import { Vacation } from "@/types/vacation";
import { delay } from "@/lib/utils";

export const getVacations = async (): Promise<Vacation[]> => {
  await delay(200);
  return [
    {
      id: "1",
      date: new Date(),
      allowed: false,
      status: "done",
      reason: "내맘",
    },
    {
      id: "2",
      date: new Date(),
      allowed: false,
      status: "waiting",
      reason: "내맘",
    },
    {
      id: "3",
      date: new Date(),
      allowed: false,
      status: "done",
      reason: "내맘",
    },
    {
      id: "4",
      date: new Date(),
      allowed: false,
      status: "done",
      reason: "내맘",
    },
    {
      id: "5",
      date: new Date(),
      allowed: false,
      status: "done",
      reason: "내맘",
    },
    {
      id: "5",
      date: new Date(),
      allowed: false,
      status: "done",
      reason: "내맘",
    },
    {
      id: "5",
      date: new Date(),
      allowed: false,
      status: "done",
      reason: "내맘",
    },
    {
      id: "5",
      date: new Date(),
      allowed: false,
      status: "done",
      reason: "내맘",
    },
    {
      id: "5",
      date: new Date(),
      allowed: false,
      status: "done",
      reason: "내맘",
    },
  ];
};

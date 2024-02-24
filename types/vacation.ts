export type VacationStatus = "waiting" | "done";

export type Vacation = {
  id: any;
  date: Date;
  allowed: boolean;
  status: VacationStatus;
  reason: string;
};

export const VacationStatusMap: Record<VacationStatus, { text: string; color: string }> = {
  done: {
    text: "사용 완료",
    color: "text-emerald-400",
  },
  waiting: {
    text: "사용 예정",
    color: "text-sky-400",
  },
};

export type VacationResponse = {};

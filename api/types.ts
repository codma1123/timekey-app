export type VacationStatus = "waiting" | "done";

export type Vacation = {
  id: any;
  date: Date;
  allowed: boolean;
  status: VacationStatus;
  reason: string;
};

export type VacationResponse = {};

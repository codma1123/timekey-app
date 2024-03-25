import { Position } from "@/types/position";

export type LocationStatus = "active";

export interface Location {
  position: Position;
  id: number;
  radius: number;
  title: string;
  address: string;
  description?: string;
}

export interface LocationSummary {}

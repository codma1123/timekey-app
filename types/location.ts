import { Position } from "@/types/position";

export interface Location {
  position: Position;
  id: number;
  radius: number;
  title: string;
  address: string;
  description?: string;
}

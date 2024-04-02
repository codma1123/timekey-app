import { Point } from "@/types/point";
import { Location } from "@prisma/client";
import { create } from "zustand";

interface LocationStoreState {
  point: Point | null;
  locations: Location[];
}

interface LocationStoreAction {
  setPoint: (point: Point | null) => void;
  setLocations: (locations: Location[]) => void;
}

export const useLocationStore = create<LocationStoreState & LocationStoreAction>((set) => ({
  point: null,
  locations: [],
  setPoint: (point: Point | null) => {
    set({ point });
  },
  setLocations: (locations: Location[]) => {
    set({ locations });
  },
}));

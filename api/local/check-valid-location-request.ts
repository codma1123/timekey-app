import { Point } from "@/types/point";
import { Location } from "@prisma/client";
import axios from "axios";

export const checkValidLocationRequest = async (params: Point): Promise<Location[]> => {
  const response = await axios.get<Location[]>("/api/location/check-valid-location", { params });
  return response.data;
};

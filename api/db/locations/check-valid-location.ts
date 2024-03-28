import { db } from "@/lib/prisma";
import { getDistance } from "@/lib/utils";
import { Point } from "@/types/point";
import { Location } from "@prisma/client";

export const checkValidLocation = async ({ point }: { point: Point }): Promise<Location[]> => {
  const locations = await db.location.findMany();

  const findLocations = locations.filter((location) => getDistance(point.latitude, point.longitude, location.latitude, location.longitude) < location.radius) || [];

  return findLocations;
};

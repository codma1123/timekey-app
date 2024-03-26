import { db } from "@/lib/prisma";
import { getDistance } from "@/lib/utils";
import { Location } from "@prisma/client";

interface UserPosition {
  latitude: number;
  longitude: number;
}

export const checkValidLocation = async ({ userPosition }: { userPosition: UserPosition }): Promise<Location[]> => {
  const locations = await db.location.findMany();

  const findLocations = locations.filter((location) => getDistance(userPosition.latitude, userPosition.longitude, location.latitude, location.longitude) < location.radius) || [];

  return findLocations;
};

import { db } from "@/lib/prisma";
import { Location } from "@prisma/client";

export const getLocation = async ({ locationId }: { locationId: string }): Promise<Location> => {
  try {
    const location = await db.location.findUnique({
      where: {
        id: locationId,
      },
    });

    return location;
  } catch {
    return null;
  }
};

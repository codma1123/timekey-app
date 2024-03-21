import { db } from "@/lib/prisma";
import { Location } from "@prisma/client";

export const getLocation = async ({ locationId }: { locationId: string }): Promise<Location | null> => {
  return await db.location.findUnique({
    where: {
      id: locationId,
    },
  });
};

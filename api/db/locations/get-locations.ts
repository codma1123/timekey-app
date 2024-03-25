import { db } from "@/lib/prisma";
import { Location } from "@prisma/client";

export const getLocations = async ({ userId }: { userId: number }): Promise<Location[] | null> => {
  return await db.location.findMany();
};

import { db } from "@/lib/prisma";
import { User } from "@prisma/client";

export const getUser = async ({ userId }: { userId: string }): Promise<User | null> => {
  return await db.user.findUnique({
    where: {
      id: userId,
    },
  });
};

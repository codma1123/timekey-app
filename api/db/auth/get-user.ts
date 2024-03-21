import { db } from "@/lib/prisma";

export const getUser = async ({ userId }: { userId: string }) => {
  return await db.user.findUnique({
    where: {
      id: userId,
    },
  });
};

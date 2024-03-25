import { StandardTime, setUserStandardTime } from "@/api/db/auth/set-user-standard-time";
import { NextResponse } from "next/server";

export const PUT = async (request: Request) => {
  const { userId, start, end } = (await request.json()) as { userId: string; start: StandardTime; end: StandardTime };

  try {
    await setUserStandardTime({ userId, start, end });
    return NextResponse.json({});
  } catch {
    new NextResponse("500");
  }
};

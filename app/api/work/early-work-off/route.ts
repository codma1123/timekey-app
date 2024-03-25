import { ealryWorkOff } from "@/api/db/works/early-work-off";
import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const PUT = async (request: Request) => {
  const { reportId } = await request.json();

  try {
    await ealryWorkOff({ reportId });
    return NextResponse.json({});
  } catch {}
};

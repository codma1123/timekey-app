import { startWork } from "@/api/db/works/start-work";
import { NextResponse } from "next/server";

export const PUT = async (request: Request) => {
  const { userId, reportId, locationId } = await request.json();

  try {
    await startWork({ userId, reportId, locationId });

    return NextResponse.json({});
  } catch {}
};

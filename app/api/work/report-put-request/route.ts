import { putReport } from "@/api/db/reports/put-report";
import { RequestType } from "@prisma/client";
import { NextResponse } from "next/server";

interface RequestBody {
  userId: UUID;
  reportId: UUID;
  requestType: RequestType;
  description: string;
}

export const PUT = async (request: Request) => {
  const body = (await request.json()) as RequestBody;

  try {
    await putReport(body);
    return NextResponse.json({});
  } catch {}
};

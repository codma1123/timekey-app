import { checkValidLocation } from "@/api/db/locations/check-valid-location";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const params = new URLSearchParams(request.url);
  const latitude = Number(params.get("latitude"));
  const longitude = Number(params.get("longitude"));

  const valid = await checkValidLocation({ point: { latitude, longitude } });

  return NextResponse.json(valid);
};

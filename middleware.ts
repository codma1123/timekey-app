import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  return NextResponse.next({
    request: {
      headers: new Headers({ "x-url": request.url }),
    },
  });
}

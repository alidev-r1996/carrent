import { NextRequest, NextResponse } from "next/server";
import cars from "./Data";

export async function GET(req: NextRequest, res: NextResponse) {
  return Response.json(cars);
}

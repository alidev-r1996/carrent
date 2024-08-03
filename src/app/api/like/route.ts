import { cookies } from "next/headers";
import { findUserByEmail, users } from "@/utils/users";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/auth";

export async function POST(req: NextRequest, res: NextResponse) {
  const { id, user } = await req.json();
  const username = users.find((user) => user.email == user.email);
  username?.favorites.push(id);
  return Response.json(username?.favorites);
}

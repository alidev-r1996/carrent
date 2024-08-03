import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

type loginProps = {
  name: string;
  email: string;
};

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10000min from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, { algorithms: ["HS256"] });
  return payload;
}

export async function login(user: loginProps) {
  const expires = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
  const refreshTokenExpires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ user, expires });
  cookies().set("session", session, {
    expires,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  cookies().set("refreshToken", user.email, {
    expires: refreshTokenExpires,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  redirect("/");
}

export async function logout() {
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(req: NextRequest) {
  const session = req.cookies.get("session")?.value as string;
  if (session) return;

  const parsed = await decrypt(session);
  const newExpires = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
  parsed.expires = newExpires;
  const res = NextResponse.next();
  req.cookies.set({
    name: "session",
    value: await encrypt(parsed),
  });
  return res;
}

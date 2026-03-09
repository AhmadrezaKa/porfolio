import { NextResponse } from "next/server";

const USERNAME = "admin";
const PASSWORD = "admin123";

export async function POST(request: Request) {
  const { username, password } = (await request.json()) as {
    username?: string;
    password?: string;
  };

  if (username !== USERNAME || password !== PASSWORD) {
    return NextResponse.json({ ok: false, error: "Invalid credentials" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.headers.append(
    "Set-Cookie",
    [
      `admin_session=ok`,
      "Path=/",
      "HttpOnly",
      "SameSite=Lax",
      process.env.NODE_ENV === "production" ? "Secure" : "",
      "Max-Age=604800",
    ]
      .filter(Boolean)
      .join("; "),
  );

  return res;
}


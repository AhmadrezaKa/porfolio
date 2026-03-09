import { NextResponse } from "next/server";

const USERNAME = "admin";
const PASSWORD = "admin123";

export async function POST(request: Request) {
  const { username, password } = (await request.json()) as {
    username?: string;
    password?: string;
  };

  if (username !== USERNAME || password !== PASSWORD) {
    return NextResponse.json(
      { ok: false, error: "Invalid credentials" },
      { status: 401 },
    );
  }

  // No cookies; the admin UI just keeps a local "logged in" flag.
  return NextResponse.json({ ok: true });
}


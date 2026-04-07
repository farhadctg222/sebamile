// /app/api/auth/login/route.js
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  if (email === "admin@gmail.com" && password === "1234") {
    const token = jwt.sign({ email }, "SECRET_KEY", { expiresIn: "7d" });

    return Response.json({ token });
  }

  return Response.json({ error: "Invalid credentials" }, { status: 401 });
}
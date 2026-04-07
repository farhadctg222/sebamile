// /lib/auth.js
import jwt from "jsonwebtoken";

export function verifyToken(token) {
  try {
    return jwt.verify(token, "SECRET_KEY");
  } catch {
    return null;
  }
}
import { CookieSerializeOptions } from "@fastify/cookie";
import { env } from "../../infra/env/index.js";

export const refreshTokenOptions: CookieSerializeOptions = {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite:env.NODE_ENV === "production" ? "none" : "lax",
    path: '/api/auth/refresh',
    maxAge: 60 * 60 * 24 * 7
}
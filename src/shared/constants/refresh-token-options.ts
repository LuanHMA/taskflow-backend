import { CookieSerializeOptions } from "@fastify/cookie";
import { env } from "../../infra/env/index.js";

export const refreshTokenOptions: CookieSerializeOptions = {
    httpOnly: env.NODE_ENV === 'production',
    secure: env.NODE_ENV === 'production',
    sameSite: 'none',
    path: '/auth/refresh',
    maxAge: 60 * 60 * 24 * 7
}
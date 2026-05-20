import z from "zod";

export const refreshTokenCookiesSchema = z.object({
    refreshToken: z.string("O refresh token deve ser uma String"),
})

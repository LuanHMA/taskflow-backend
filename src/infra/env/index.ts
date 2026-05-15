import z from "zod";

const envSchema = z.object({
    PORT: z.coerce.number("Formato inválido"),
    JWT_SCRET: z.string("Formato inválido"),
    JWT_REFRESH_SECRET: z.string("Formato inválido"),
})

const parse = envSchema.safeParse(process.env)

if (!parse.success || parse.error) {
    throw new Error("Erro ao carregar variáveis de ambiente", { cause: parse.error })
}

export const env = parse.data
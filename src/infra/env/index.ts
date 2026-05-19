import "dotenv/config"
import z from "zod";

const envSchema = z.object({
    NODE_ENV: z
        .enum(["development", "test", "production"])
        .default("development"),
    PORT: z.string("Formato inválido"),
    JWT_SECRET: z.string("Formato inválido"),
    FRONTEND_URL: z.string("Formato inválido"),
    DATABASE_URL: z.string("Formato inválido"),
    DATABASE_HOST: z.string("Formato inválido"),
    DATABASE_USER: z.string("Formato invildo"),
    DATABASE_PASSWORD: z.string("Formato invildo"),
    DATABASE_NAME: z.string("Formato invildo"),
    REDIS_HOST: z.string("Formato invildo"),
    REDIS_PORT: z.string("Formato invildo"),
})

const parse = envSchema.safeParse(process.env)

if (!parse.success || parse.error) {
    throw new Error("Erro ao carregar variáveis de ambiente", { cause: parse.error })
}

export const env = parse.data
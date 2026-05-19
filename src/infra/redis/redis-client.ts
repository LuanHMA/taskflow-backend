import { Redis } from "ioredis";
import { env } from "../env/index.js";

export const redis = new Redis({
    host: env.REDIS_HOST,
    port: Number(env.REDIS_PORT)
})

redis.on("connect", () => {
    console.log("Redis conectado com sucesso!")
})

redis.on("error,", (error) => {
    console.error("[Erro ao conectar ao Redis]: ", error)
})
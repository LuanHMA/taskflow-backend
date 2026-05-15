import { app } from "./app";
import { env } from "./infra/env";

app.listen({
    port: env.PORT
}).then(() => {
    console.log("Servidor rodando na porta ", env.PORT)
}).catch((error) => {
    console.error("[Erro ao iniciar servidor]: ", error)
    process.exit(1)
})


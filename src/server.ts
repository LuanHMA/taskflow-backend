import { app } from "./app.js";
import { env } from "./infra/env/index.js";

app.listen({
    port: Number(env.PORT)
}).then(() => {
    console.log(`Servidor rodando em http://localhost:${env.PORT}`)
}).catch((error) => {
    console.error("[Erro ao iniciar servidor]: ", error)
    process.exit(1)
})


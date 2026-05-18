import "dotenv/config";
import { defineConfig } from "prisma/config";
import { env } from "./src/infra/env/index.js";

export default defineConfig({
  schema: "src/infra/database/prisma/schema.prisma",
  migrations: {
    path: "src/infra/database/prisma/migrations",
  },
  datasource: {
    url: env.DATABASE_URL,
  },
});

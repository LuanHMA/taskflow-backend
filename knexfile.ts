import type { Knex } from 'knex'
import 'dotenv/config'

const config: Knex.Config = {
  client: 'mysql2',

  connection: {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },

  migrations: {
    extension: 'ts',
    directory: './src/infra/database/migrations',
  },

  seeds: {
    extension: 'ts',
    directory: './src/infra/database/seeds',
  },
}

export default config
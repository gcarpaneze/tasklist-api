// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables.js' {
  interface Tables {
    tasks: {
      id: string
      title: string
      description: string
      completed_at?: string
      created_at?: string
      updated_at?: string
    }
  }
}

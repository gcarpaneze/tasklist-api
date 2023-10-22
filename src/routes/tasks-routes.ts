import { FastifyInstance } from 'fastify'
import { randomUUID } from 'node:crypto'
import { z } from 'zod'

import { knex } from '../database'
import { parse } from 'csv-parse/.'

export async function taskRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const response = await knex('tasks').select()

    return { tasks: response }
  })

  app.post('/', async (request, reply) => {
    const bodySchema = z.object({
      title: z.string(),
      description: z.string(),
    })

    const { title, description } = bodySchema.parse(request.body)

    await knex('tasks').insert({
      id: randomUUID(),
      title,
      description,
    })

    return reply.code(201).send()
  })

  app.put('/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      title: z.string(),
      description: z.string(),
    })

    const { title, description } = bodySchema.parse(request.body)

    await knex('tasks').where('id', id).update({
      title,
      description,
      updated_at: knex.fn.now(),
    })

    return reply.code(200).send()
  })

  app.patch('/:id/complete', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    await knex('tasks').where('id', id).update({
      completed_at: knex.fn.now(),
    })

    return reply.code(200).send()
  })

  app.delete('/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    await knex('tasks').where('id', id).delete()

    return reply.code(200).send()
  })

  app.post('/csv', async (request, reply) => {
    const { input } = request.body

    const records = parse(input, {
      delimiter: ',',
      skip_empty_lines: true,
    })

    const teste = records.map((record) => {
      return { title: record[0], description: record[1] }
    })

    console.log(teste)
  })
}

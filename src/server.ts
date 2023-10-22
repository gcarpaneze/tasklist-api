import fastify from 'fastify'
import { taskRoutes } from './routes/tasks-routes'
import { env } from './env'

const app = fastify()

app.register(taskRoutes, {
  prefix: '/tasks',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server HTTP Online')
  })

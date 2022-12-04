import * as http from 'http'
import * as express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import * as cors from 'cors'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { typeDefs, resolvers } from './schema'
import * as bodyParser from 'body-parser'

// import * as path from 'path'
// import { json } from 'body-parser'

interface ApolloContext {
  token?: string
}

const app = express()
const httpServer = http.createServer(app)

const server = new ApolloServer<ApolloContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

await server.start()

app.use(
  '/',
  cors<cors.CorsRequest>(),
  bodyParser.json(),

  // expressMiddleware accepts args: instance of Apollo Server + optional config options
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
)

// app.use('/assets', express.static(path.join(__dirname, 'assets')))

// app.get('/hello', (_req, res) => {
//   res.send({ message: 'Hello world!' })
// })

const port = process.env['port'] || 3333

try {
  await new Promise<void>((resolve) =>
    httpServer.listen({ port }, () => {
      console.log(`🚀 Server ready at http://localhost:${port}/`)
      resolve()
    }),
  )
} catch (error: unknown) {
  console.error(error)
}

httpServer.on('error', console.error)

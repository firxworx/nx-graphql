import * as http from 'http'
import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import helmet from 'helmet'

import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'

import { typeDefs, resolvers } from './schema'

interface ApolloContext {
  token?: string
}

const app = express()
const httpServer = http.createServer(app)

const apolloServer = new ApolloServer<ApolloContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],

  // for production consider disabling introspection and using Apollo's schema registry
  // introspection: process.env['NODE_ENV'] !== 'production',
})

await apolloServer.start()

app.use(
  '/',
  cors<cors.CorsRequest>(),
  bodyParser.json(),

  // expressMiddleware accepts args: instance of Apollo Server + optional config options
  expressMiddleware(apolloServer, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
)

app.use(helmet())

// app.use('/assets', express.static(path.join(__dirname, 'assets')))

const port = process.env['port'] || 3333

try {
  await new Promise<void>((resolve) =>
    httpServer.listen({ port }, () => {
      console.log(`🚀 Server ready with GraphQL at http://localhost:${port}`)
      resolve()
    }),
  )
} catch (error: unknown) {
  console.error(error)
}

httpServer.on('error', console.error)

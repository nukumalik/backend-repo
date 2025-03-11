import express from 'express'
import {SERVER_PORT, logger} from '@/config'
import {routes} from '@/routes'
import {errorMiddleware} from '@/middlewares'

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(routes)
app.use(errorMiddleware)

export const runServer = () => {
  app.listen(SERVER_PORT, () => {
    logger.info(`🚀 Server is running at http://localhost:${SERVER_PORT}`)
  })
}

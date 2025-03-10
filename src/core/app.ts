import express from 'express'
import {APP_PORT} from '@/config'
import {routes} from '@/routes'
import {authMiddleware} from '@/middlewares'

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(authMiddleware)
app.use('/api/v1', routes)

export const runServer = () => {
  app.listen(APP_PORT, () => {
    console.log(`Server is running at http://localhost:${APP_PORT}`)
  })
}

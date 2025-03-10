import express from 'express'
import {APP_PORT} from '@/config/constants'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, My World!')
})

app.listen(APP_PORT, () => {
  console.log(`Server is running at http://localhost:${APP_PORT}`)
})

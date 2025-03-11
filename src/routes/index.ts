import {Router} from 'express'
import {userRoute} from './user-route'
import {ErrorController} from '@/controllers/error-controller'

export const routes = Router()
  .use('/api/v1', userRoute)
  .use('*', ErrorController.notFound)

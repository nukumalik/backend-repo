import {UserController} from '@/controllers'
import {Router} from 'express'

export const userRoute = Router()
  .get('/users', UserController.getUserList)
  .get('/users/:id', UserController.getUserDetail)
  .post('/users', UserController.createUser)
  .put('/users/:id', UserController.updateUser)
  .delete('/users/:id', UserController.removeUser)

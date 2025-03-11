import {UserController} from '@/controllers'
import {authMiddleware} from '@/middlewares'
import {Router} from 'express'

export const userRoute = Router()
  // * Below are routes path naming follow the technical test doc (fetch-user-data & update-user-data)
  .get('/fetch-user-data/:id', authMiddleware, UserController.getUserDetail)
  .put('/update-user-data/:id', authMiddleware, UserController.updateUser)

  // * Below are route that follow route path convention
  .get('/users', authMiddleware, UserController.getUserList)
  .get('/users/:id', authMiddleware, UserController.getUserDetail)
  .post('/users', authMiddleware, UserController.createUser)
  .put('/users/:id', authMiddleware, UserController.updateUser)
  .delete('/users/:id', authMiddleware, UserController.removeUser)

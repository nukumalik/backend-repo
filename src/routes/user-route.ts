import {UserController} from '@/controllers'
import {authMiddleware} from '@/middlewares'
import {Router} from 'express'

// * This route path naming follow the technical test doc (fetch-user-data & update-user-data)
export const userRoute = Router()
  .get('/fetch-user-data', authMiddleware, UserController.getUserList)
  .get('/fetch-user-data/:id', authMiddleware, UserController.getUserDetail)
  .post('/create-user-data', authMiddleware, UserController.createUser)
  .put('/update-user-data/:id', authMiddleware, UserController.updateUser)
  .delete('/delete-user-data/:id', authMiddleware, UserController.removeUser)

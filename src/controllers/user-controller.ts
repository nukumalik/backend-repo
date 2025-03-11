import {UserRepository} from '@/repositories'
import {HttpError} from '@/utils'
import {NextFunction, Request, Response} from 'express'
import {Timestamp} from 'firebase-admin/firestore'

export class UserController {
  static async getUserList(_req: Request, res: Response, next: NextFunction) {
    try {
      const data = await UserRepository.findAll()
      res.status(200).json({
        message: 'success',
        data
      })
    } catch (error) {
      next(error)
    }
  }

  static async getUserDetail(req: Request, res: Response, next: NextFunction) {
    try {
      const {id} = req.params
      const data = await UserRepository.findById(id)
      if (!data) throw HttpError.notFound('User not found')

      res.status(200).json({
        message: 'success',
        data
      })
    } catch (error) {
      next(error)
    }
  }

  static async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const {name, totalAverageWeightRatings, numberOfRents, recentlyActive} =
        req.body
      await UserRepository.create(
        name,
        totalAverageWeightRatings,
        numberOfRents,
        recentlyActive
      )
      res.status(201).json({message: 'success'})
    } catch (error) {
      next(error)
    }
  }

  static async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const {id} = req.params
      const user = await UserRepository.findById(id)
      if (!user) throw HttpError.notFound('User not found')

      const {name, totalAverageWeightRatings, numberOfRents, recentlyActive} =
        req.body
      const payload = {
        name: name || user.name,
        totalAverageWeightRatings:
          totalAverageWeightRatings || user.totalAverageWeightRatings,
        numberOfRents: numberOfRents || user.numberOfRents,
        recentlyActive: Timestamp.fromMillis(
          recentlyActive || user.recentlyActive
        )
      }
      await UserRepository.update(id, payload)
      res.status(200).json({
        message: 'success'
      })
    } catch (error) {
      next(error)
    }
  }

  static async removeUser(req: Request, res: Response, next: NextFunction) {
    try {
      const {id} = req.params
      const user = await UserRepository.findById(id)
      if (!user) throw HttpError.notFound('User not found')

      await UserRepository.remove(id)
      res.status(200).json({
        message: 'success'
      })
    } catch (error) {
      next(error)
    }
  }
}

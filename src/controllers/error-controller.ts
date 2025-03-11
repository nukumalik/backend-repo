import {HttpError} from '@/utils'
import {NextFunction, Request, Response} from 'express'

export class ErrorController {
  static async notFound(_req: Request, res: Response, next: NextFunction) {
    try {
      throw HttpError.notFound()
    } catch (error) {
      next(error)
    }
  }
}

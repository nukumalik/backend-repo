import {NextFunction, Request, Response} from 'express'
import {ACCESS_TOKEN, logger} from '@/config'
import {HttpError} from '@/utils'

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authheader = req.headers.authorization
  if (!authheader || authheader !== ACCESS_TOKEN) {
    const error = HttpError.unauthorized("You're not authenticated!")
    logger.error(
      `${error.message} | ${req.protocol} ${error.status} | ${req.method} ${req.path}`
    )
    res.status(error.status).json({
      message: error.message,
      error: error.data
    })
  } else {
    next()
  }
}

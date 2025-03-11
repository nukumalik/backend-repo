import {logger} from '@/config'
import {HttpError} from '@/utils'
import {Request, Response, NextFunction} from 'express'

export function errorMiddleware(
  error: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
) {
  if (error instanceof HttpError) {
    logger.error(
      `${error.message} | ${req.protocol} ${error.status} | ${req.method} ${req.path}`
    )
    res.status(error.status).json({
      message: error.message,
      error: error.data
    })
  } else {
    logger.error(
      `Unknown Error | ${req.protocol} 500 | ${req.method} ${req.path}`
    )
    res.status(500).json({
      message: 'Something went wrong!'
    })
  }
}

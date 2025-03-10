import {Buffer} from 'node:buffer'
import {NextFunction, Request, Response} from 'express'

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authheader = req.headers.authorization
  if (!authheader) {
    res
      .status(401)
      .setHeader('WWW-Authenticate', 'Basic')
      .json({message: 'You are not authenticated!'})
  }

  const auth = Buffer.from(authheader?.split(' ')?.[1] || '', 'base64')
    .toString()
    .split(':')
  const user = auth[0]
  const pass = auth[1]

  if (user == 'admin' && pass == 'admin') {
    next()
  } else {
    res
      .status(401)
      .setHeader('WWW-Authenticate', 'Basic')
      .json({message: 'You are not authenticated!'})
  }
}

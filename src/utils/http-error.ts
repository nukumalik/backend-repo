export interface HttpErrorValue {
  code: number
  message: string
  data?: any
}

export class HttpError extends Error {
  status: number
  data?: any

  constructor(error: HttpErrorValue) {
    super(error.message)
    this.status = error.code
    this.data = error.data

    Object.setPrototypeOf(this, HttpError.prototype)
  }

  static internalServerError(message = 'Something went wrong!') {
    return new HttpError({code: 500, message})
  }

  static bedRequest(message = 'Bad request!', data: any = undefined) {
    return new HttpError({code: 400, message, data})
  }

  static unauthorized(message = 'Unauthorized') {
    return new HttpError({code: 401, message})
  }

  static notFound(message = 'Not Found') {
    return new HttpError({code: 404, message})
  }
}

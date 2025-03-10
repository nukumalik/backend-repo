import {Router} from 'express'
import {userRoute} from './user-route'

export const routes = Router().use(userRoute)

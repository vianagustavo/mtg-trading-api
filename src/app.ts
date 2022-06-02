import express from 'express'
import 'express-async-errors'
import { errorHandler } from './middleware/errorHandler'
import { router } from './routes'

export class NotFound extends Error {}
export class InvalidArgument extends Error {}
export class InternalServerError extends Error {}

const app = express()

app.use(express.json())

app.use(router)

app.use(errorHandler)

export default app

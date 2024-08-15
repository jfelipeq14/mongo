import express, { json } from 'express'
import { corsMiddleware } from '../middlewares/cors.js'
import { PORT } from '../config.js'
import { mongo } from '../db.js'

export class Server {
  constructor () {
    this.app = express()
    this.app.use(json())
    this.app.use(corsMiddleware())
    this.app.disable('x-powered-by')
    this.dbConnect()
  }

  async dbConnect () {
    await mongo()
  }

  listen () {
    this.app.listen(PORT, () => { console.log(`server listening on port http://localhost:${PORT}`) })
  }
}

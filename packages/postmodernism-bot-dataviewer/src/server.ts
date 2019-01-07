import express = require('express')
import { Request, Response, Application } from 'express-serve-static-core'

export default class Server {
  app: Application;

  constructor () {
    this.app = express()
  }

  start () {
    console.log('Awaiting stuff and things!')

    this.app.get('/', function (req: Request, res: Response) {
      res.send('Hello World')
    })

    this.app.listen(3000)

  }
}

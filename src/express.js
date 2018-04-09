const express = require('express')
const debug = require('debug')('postmodernismBot:express')
const web = {
  Express: express,
  hostname: '0.0.0.0',
  portnr: 3000
}

web.app = web.Express()

web.listen = () => {
  debug('listening!')
  web.app.listen(web.portnr, web.hostname)
}

module.exports = web

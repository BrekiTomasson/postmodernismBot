const dotenv = require('./environment')

const nodemon = require('nodemon')
const bugger = require('debug')
const debug = bugger('postmodernismBot:loader')

if (dotenv.ENVIRONMENT === 'TEST' || dotenv.ENVIRONMENT === 'DEVELOPMENT') {
  bugger.enable('postmodernismBot:*')
  debug('Debugger enabled')
}

if (dotenv.ENVIRONMENT === 'PRODUCTION' || dotenv.ENVIRONMENT === 'DEVELOPMENT') {
  nodemon({ script: 'bot.js' })
    .on('start', () => {
      debug('Nodemon starting server.')
    })
    .on('crash', () => {
      debug('Nodemon crashed.')
    })

  nodemon.emit('quit')
}

if (dotenv.ENVIRONMENT === 'TEST') {
  debug('Sure, bro. Let\'s test some shit.')
  debug('Just you and me in test-land.')
}

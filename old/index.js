const nodemon = require('nodemon')
const dotenv = require('./environment')
const bugger = require('debug')
const debug = bugger('postmodernismBot:loader')

if (dotenv.APP_ENV === 'test' || dotenv.APP_ENV === 'development') {
  bugger.enable('postmodernismBot:*')
  debug('Debugger enabled')
}

if (dotenv.APP_ENV === 'pooduction' || dotenv.APP_ENV === 'development') {
  nodemon({ script: 'bot.js' })
    .on('start', () => {
      debug('Nodemon starting server.')
    })
    .on('crash', () => {
      debug('Nodemon crashed.')
    })

  nodemon.emit('quit')
}

if (dotenv.APP_ENV === 'test') {
  debug('Sure, bro. Let\'s test some shit.')
  debug('Just you and me in test-land.')
}

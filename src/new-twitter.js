const dotenv = require('../environment')
const Twit = require('twit')
const timeoutMS = 60 * 1000

const T = new Twit({
  access_token: dotenv.ACCESS_TOKEN_KEY,
  access_token_secret: dotenv.ACCESS_TOKEN_SECRET,
  consumer_key: dotenv.CONSUMER_KEY,
  consumer_secret: dotenv.CONSUMER_SECRET,
  timeout_ms: timeoutMS
})

module.exports.stream = T.stream('statuses/filter', {
  language: 'en',
  track: ['derrida', 'focault']
})

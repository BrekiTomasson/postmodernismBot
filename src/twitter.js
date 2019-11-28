/* eslint camelcase: "off" */

const dotenv = require('../environment')
const debug = require('debug')('postmodernismBot:twitter')
const Twitter = require('twitter')
const text = require('./text.js')

const client = new Twitter({
  access_token_key: dotenv.ACCESS_TOKEN_KEY,
  access_token_secret: dotenv.ACCESS_TOKEN_SECRET,
  consumer_key: dotenv.CONSUMER_KEY,
  consumer_secret: dotenv.CONSUMER_SECRET
})

// const params = {screen_name: 'The Postmodern'}

function reply (msg, toUser, message) {
  debug('Replying to tweet.')
  const tweet = {
    in_reply_to_status_id: msg,
    status: `@${toUser} ${message}`
  }

  client.post('statuses/update', tweet, (error, data) => {
    debug('Posting update.')
    if (error) throw error
    debug('Reply sent: ', data.text)
  })
}

function post () {
  const tweet = text.GenerateTweet()
  debug('Posting tweet.')

  client.post('statuses/update', { status: tweet }, (error, twitterPost, response) => {
    if (error) throw error
    debug('Tweet posted: ', twitterPost.text)
  })
}

module.exports = {
  post: post,
  reply: reply
}

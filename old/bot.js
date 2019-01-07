const config = require('./src/config')
const debug = require('debug')('postmodernismBot:core')
const express = require('./src/express')
const func = require('./src/common-functions')
const rxjs = require('rxjs')
const telegram = require('./src/telegram')
const text = require('./src/text')
const twitter = require('./src/new-twitter')

const wtemplate = require('./lib/web/webtemplate.js')

text.GenerateSentence().then(output => console.log(output))

/** Commenting out the old code.

express.listen()

debug(`Running on http://${express.hostname}:${express.portnr}`)

express.app.get('/', (req, res) => {
  debug('Responding to web request')
  text.GenerateSentence()
    .then(output => {
      debug(' ==> Web :', output)
      res.send(wtemplate.before + output + wtemplate.after)
    })
})

const observable = rxjs.Observable.create(observer => {
  debug('Constructing observer')

  setInterval(() => {
    debug('Time to post a tweet!')
    text.GenerateSentence().then(output => {
      debug(`Tweeting : ${output}`)
      twitter.post(output)
      })
    }, func.getRandomInt(config.timer.twitterMinimum,
        config.timer.twitterMaximum))
})

telegram.onText('', msg => {
  text.GenerateSentence()
    .then(output => {
      debug(`Telegram : ${output}`)
      telegram.sendMessage(msg.chat.id, output)
    })
})

const observer = {}

observable.subscribe(observer)
*/

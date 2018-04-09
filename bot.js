const config = require('./src/config')
const debug = require('debug')('postmodernismBot:core')
const cl = require('./src/natural')
const express = require('./src/express')
const func = require('./src/common-functions')
const rxjs = require('rxjs')
const telegram = require('./src/telegram')
const text = require('./src/text')
const twitter = require('./src/twitter')

// const rita = require('rita')
// const newTwitter = require('./src/new-twitter')

const wtemplate = require('./lib/web/webtemplate.js')

express.listen()

cl.load()

debug(`Running on http://${express.hostname}:${express.portnr}`)

express.app.get('/', (req, res) => {
  debug('Responding to web request')
  const output = text.GenerateSentence()
  debug(' ==> Web :', output)
  res.send(wtemplate.before + output + wtemplate.after)
})

const observable = rxjs.Observable.create(observer => {
  debug('Constructing observer')

  /*
  setInterval(() => {
    const consoleOutput = text.GenerateSentence()
    observer.next(consoleOutput)
  }, config.timer.console)
*/

  setInterval(() => {
    cl.save()
    debug('saving brain')
  }, config.timer.brainsave)

  setInterval(() => {
    debug('Time to post a tweet!')
    observer.next(twitter.post())
  }, func.getRandomInt(config.timer.twitterMinimum, config.timer.twitterMaximum))
})

telegram.on('chosen_inline_result', q => {
  debug('inline result!')
  debug(q)
})

telegram.on('callback_query', q => {
  debug(q)

  telegram.answerCallbackQuery(q.id, { text: 'Thanks!' })

  if ('data' in q) {
    const guess = cl.test(q.message.text)

    if (q.data === 'SKIP') telegram.sendMessage(q.message.chat.id, 'Skipping this one!')
    else {
      telegram.sendMessage(q.message.chat.id, `Saving the sentence as ${q.data} ... I thought it was: ${guess}.`,
        {
          reply_markup: {
            keyboard: [
              [
                '/learn', '/random', '/start'
              ]
            ],
            one_time_keyboard: true
          }
        })
        .then(dd => {
          return dd
        })
        .catch(err => { debug(err) })

      cl.add(q.message.text, q.data)
      cl.train()
    }
  }
  if ('game' in q.message) {
    telegram.getGameHighScores(q.from.id, {
      chat_id: q.message.chat.id,
      message_id: q.message.message_id
    })
      .then(debug)
      .catch(err => { debug(err) })
  }
})

/*
newTwitter.stream.on('tweet', tweet => {
  debug('Postmodern tweet heard:', tweet.text)
})
*/

telegram.onText(/\/start/, msg => {
  telegram.sendGame(msg.chat.id, 'werdlern')
})

telegram.onText(/\/random/, msg => {
  const output = text.GenerateSentence()
  debug(`Telegram : ${output}`)
  telegram.sendMessage(msg.chat.id, output)
})

telegram.onText(/\/learn/, msg => {
  const output = text.GenerateSentence()

  telegram.sendMessage(msg.chat.id, output, {
    reply_markup: {
      inline_keyboard: [
        [
          { callback_data: 'conspiracy', text: 'conspiracy' },
          { callback_data: 'feminism', text: 'feminism' },
          { callback_data: 'mysticism', text: 'mysticism' }
        ], [
          { callback_data: 'history', text: 'history' },
          { callback_data: 'philosophy', text: 'philosophy' },
          { callback_data: 'psychology', text: 'psychology' }
        ], [
          { callback_data: 'religion', text: 'religion' },
          { callback_data: 'science', text: 'science' },
          { callback_data: 'sex', text: 'sex' }
        ], [
          { callback_data: 'sociology', text: 'sociology' },
          { callback_data: 'surrealism', text: 'surrealism' },
          { callback_data: 'SKIP', text: 'SKIP' }
        ]
      ],
      one_time_keyboard: true
    }
  })
})

const observer = {}

/*
  next: consoleLog => {
    return debug(output)
  }
  */

observable.subscribe(observer)

const exec = require('child_process').exec
const postmodernismBotWorker = require('postmodernism-bot-worker')

exec('cd ./packages/postmodernism-bot-worker/src', (error) => {
  if (error) {
    throw new Error(error)
  }

  exec('tsc', (error) => {
    if (error) {
      throw new Error(error)
    }

  })

})

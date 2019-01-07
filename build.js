const exec = require('child_process').exec
const postmodernismBotWorker = require('postmodernism-bot-worker')

exec('cd ./packages/postmodernismBotWorker', (error, stdout, stderr) => {
  console.log('error: ' + error)
  console.log('stdout: ' + stdout)
  console.log('stderr: ' + stderr)
})

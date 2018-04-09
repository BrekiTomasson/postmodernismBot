const dotenv = require('../environment')
const Telegram = require('node-telegram-bot-api')
const token = dotenv.TELEGRAM_BOT_TOKEN

module.exports = new Telegram(token, { polling: true })

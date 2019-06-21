const TelegramBot = require('node-telegram-bot-api')

const TOKEN='726536102:AAF_9ERlMdPCdAFBOHfEzvpTxpOEP3njl8s'

const bot = new TelegramBot *(TOKEN, {polling:true})

bot.on ('message', msg => {
    bot.sendMessage(msg.chat.id,`Hello from Heroku, bot says: "Hi, ${msg.from.first_name}"`)
}
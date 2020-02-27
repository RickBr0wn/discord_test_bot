require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()
const pingPongHandler = require('./commands/pingPong')

client.once('ready', () => {
  console.log('🤖 Beep, beep! I`m working!!!')
})

client.on('message', pingPongHandler)

client.login(process.env.DISCORD_TOKEN)

process.on('unhandledRejection', error => {
  console.log('unhandledRejection:', error.message)
  console.error(error)
})

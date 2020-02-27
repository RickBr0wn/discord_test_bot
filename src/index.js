require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()
const pingPongHandler = require('./commands/pingPong')
const helpHandler = require('./commands/helpHandler')

client.once('ready', () => {
  console.log('🤖 Beep, beep! I`m working!!!')
})

client.on('message', pingPongHandler)
client.on('guildMemberAdd', helpHandler)

client.login(process.env.DISCORD_TOKEN)

process.on('unhandledRejection', error => {
  console.log('unhandledRejection:', error.message)
  console.error(error)
})

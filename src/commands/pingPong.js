module.exports = async function(msg) {
  const channel =
    msg.guild.id === process.env.GUILD_ID &&
    msg.channel.id === process.env.CHANNEL_ID

  if (channel) {
    // console.log(msg)
    if (
      msg.content.toLowerCase() === 'ping!' ||
      msg.content.toLowerCase() === 'ping'
    ) {
      await msg.channel.send('Pong!')
    }
  }
}

module.exports = async function(member) {
  const channel = member.guild.channels.find(chn => chn.name === 'member-log')

  if (!channel) {
    return
  }

  channel.send(
    `Welcome ${member} to this development server. My name is TEST_BOT, and I'm here to help. Just type '!help' for a list of the commands that I understand 🤖`
  )
}

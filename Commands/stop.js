module.exports.run = async (client, message, args, ops) => {
    if(!message.member.voiceChannel) return message.channel.send('you\'re not in a voice channel.. at all')

    if(!message.guild.me.voiceChannel) return message.channel.send('I\'m not connected to a channel. :flushed:')
    
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('You\'re not currently connected to my voice channel :angry:')

    message.guild.me.voiceChannel.leave();
    message.channel.send("Stopped playing music and left the voice channel :sad:")
}
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  };
  
  module.exports.help = {
    name: "stop",
    category: "Music",
    description: "leaves the voice channel",
    usage: "stop"
  };
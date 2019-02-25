
module.exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);

    if(!fetched) return message.channel.send('There currently isn\'t any music playing')

    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('You\'re not currently connected to my voice channel :angry:')

    if(!fetched.dispatcher.paused) return message.channel.send('This music isn\'t paused.')

    fetched.dispatcher.resume();
}
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  };
  
  module.exports.help = {
    name: "resume",
    category: "Music",
    description: "resumes the music",
    usage: "resume"
  };
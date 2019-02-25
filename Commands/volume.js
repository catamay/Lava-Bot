module.exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);

    if(!fetched) return message.channel.send('There currently isn\'t any music playing')

    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('You\'re not currently connected to my voice channel :angry:')

    if(isNaN(args[0])|| args[0] > 200 || args[0] < 0) return message.channel.send('Please input a number between 0 and 200');

    fetched.dispatcher.setVolume(args[0]/100);
    message.channel.send(`Successfully set the volume of ${fetched.queue[0].songTitle} to ${args[0]}`)
}
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  };
  
  module.exports.help = {
    name: "volume",
    category: "Music",
    description: "Adjusts song volume",
    usage: "volume {int}"
  };
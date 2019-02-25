module.exports.run = async (client, message, args, ops) => { 
    let fetched = ops.active.get(message.guild.id);

    if(!fetched) return message.channel.send('There currently isn\'t any music playing')

    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('You\'re not currently connected to my voice channel :angry:')

    
    let userCount = message.member.voiceChannel.members.size;

    let required = Math.ceil(userCount/2);

    if(!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];

    if(fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`sorry, you already voted to skip! ${fetched.queue[0].voteSkips.length}/${required} required.`)

    fetched.queue[0].voteSkips.push(message.member.id);

    ops.active.set(message.guild.id, fetched);

    if(fetched.queue[0].voteSkips.length >= required){
        message.channel.send('Successfully skipped song!')

        return fetched.dispatcher.emit('end')
    }
    message.channel.send(`Successfully voted to skip! {fetched.queue[0].voteSkips.length}/${required} required.`)
}
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  };
  
  module.exports.help = {
    name: "skip",
    category: "Music",
    description: "vote to skip the current song!",
    usage: "skip"
  };
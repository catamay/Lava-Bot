const Discord = require('discord.js')
module.exports.run = async (client, message, args, ops) => {
    
    let fetched = ops.active.get(message.guild.id)
    let data = ops.active.get(message.guild.id) || {};
    if(!fetched) return message.channel.send(`There currently isn't any music playing! Why don't you add some :wink:`);
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('You\'re not currently connected to my voice channel :angry:')



    let queue = fetched.queue;
    let nowPlaying = queue[0];
    d = '**' +'['+nowPlaying.songTitle+']'+'(https://www.youtube.com'+data.queue[0].url +')'+'**'
    c = ''
        for (var i = 1; i < queue.length; i++){
            c += '**'+(i)+'.'+' ['+queue[(i)].songTitle+'](https://www.youtube.com'+data.queue[(i)].url+')**\n'
        }
            c += `**Music Currently in Queue**`
        console.log(c)
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor ([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
            .addField ("Now Playing",d+ '\n')
            .addField ("Queue", c) 
        });
    

}
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  };
  
  module.exports.help = {
    name: "queue",
    category: "Music",
    description: "Displays the song queue",
    usage: "queue"
  };
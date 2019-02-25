const search = require('yt-search')
const ytdl = require('ytdl-core')
const Discord = require('discord.js')
module.exports.run = async (client, message, args, ops) => {
    
    search(args.join(''), async function(err,res) {
        if (err) return message.channel.send('Sorry, something went wrong');
        
        let validate = await ytdl.validateURL(args[0]);
        
        if(validate){
            let commandFile = require(`../Music/music.js`);
                    commandFile.run(client, message, args, ops);
        }else{
                    let videos = res.videos.slice(0, 5);

                    let resp = ''
                    for (var i in videos) {
                        resp += `**[${parseInt(i)+1}]:** **[${videos[i].title}](https://www.youtube.com+${videos[i].url})**\n`
                    }
                    if(resp.length > 1024){
                        resp.slice(0, 1024)
                    }
                    message.channel.send({embed: new Discord.RichEmbed()
                        .setColor ([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
                        .addField (`Song Selection. Choose a number between 1 and ${videos.length}`,resp + '\n')
                    });
        
                    const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content >0;
        
                    const collector = message.channel.createMessageCollector(filter);
        
                    collector.videos = videos;
        
                    collector.once('collect', async function(m){
                        let commandFile = require(`../Music/music.js`);
                        commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url], ops);
                    });
        };   
    });
};
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  };
  
  module.exports.help = {
    name: "play",
    category: "Music",
    description: "plays a song",
    usage: "play {song}"
  };
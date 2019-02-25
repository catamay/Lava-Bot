const Discord = require('discord.js')
const config = require('../botconfig.json')

module.exports.run = async (client, message, args, level) => {
        let text = args.join(" ");
        if(text.length <= 0){
            message.channel.send("Please type your message")
        }
    message.delete();
    message.guild.member(config.shellid).send({embed: new Discord.RichEmbed()
        .setTitle (`New message from ${message.guild.member(message.author.id).displayName}`)
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setColor (message.member.displayHexColor)
        .setTimestamp()
        .addField("Message Body:", text)
    });
}
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  };
  
  module.exports.help = {
    name: "loveshell",
    category: "Utility",
    description: "Sends a message to Shell",
    usage: "loveshell {text}"
  };
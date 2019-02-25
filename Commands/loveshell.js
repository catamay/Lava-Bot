const Discord = require('discord.js')

module.exports.run = async (client, message, args, level) => {
        let text = args.join(" ");
        if(text.length <= 0){
            message.channel.send("Please type your message")
        }
    message.delete();
    /*message.guild.member('369323235050913802').send(message.guild.name + ' (' + message.guild.id + ') ' 
    + '\n' + message.guild.member(message.author.id).displayName + ' (' + message.author.username + ' ID: ' + message.author.id + ')'  + ' in ' + message.channel.name 
    + '\n' + text 
    + '\n' + message.createdAt +'\n')*/
    message.guild.member('417798240675823617').send({embed: new Discord.RichEmbed()
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
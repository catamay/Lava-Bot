module.exports.run = async (client, message, args, ops) => {
    var ping = message.mentions.users.first();   
    if (ping != null){
        message.channel.send(message.guild.member(message.author.id).displayName + ' lavas ' + message.guild.member(ping).displayName)
        }else{
        message.channel.send('We all lava u');
      };
}
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  };
  
  module.exports.help = {
    name: "lava",
    category: "Fun",
    description: "lavas u",
    usage: "lava"
  };
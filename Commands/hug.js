const NUM_HUG = 0;
var Hug = 
[
  
]

module.exports.run = async (client, message, args) => { 
  var ping = message.mentions.users.array()[0];    
  var rand =  Math.floor(Math.random() * NUM_HUG);
  if (ping != null){
      message.channel.send(message.author.username + ' has hugged ' + ping + '\n' + Hug[rand].link)
      }else{
      message.channel.send("please mention someone");
    };
  }
  module.exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: []
    };
    
    module.exports.help = {
      name: "hug",
      category: "Fun",
      description: "Hug a server member **_Deprecated_**",
      usage: "hug @{member}"
    };
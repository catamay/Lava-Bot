module.exports.run = async (client, message, args) => {
    message.reply("I think you meant love...")
    setTimeout(() =>{message.channel.send(`*Hugs* ${message.guild.member(message.author.id).displayName} - placeholder for when I put in the hug command gifs`)}, 1000)
}
  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  };
  
  module.exports.help = {
    name: "killme",
    category: "General",
    description: "kills you..? **_Deprecated_**",
    usage: "killme"
  };
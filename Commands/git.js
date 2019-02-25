module.exports.run = async (client, message, args) => { 
    message.channel.send("https://github.com/catamay/Lava-bot")
}
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['gh', 'github']
}
module.exports.help = {
    name: "git",
    category: "System",
    description: "Links Lava Bot's repo (Currently Private)",
    usage: "git, gh, github"
  };
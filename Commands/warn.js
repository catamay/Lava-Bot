const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.slice(1).join(" ")
    if(rreason.length < 1){
      rreason = "No reason provided"
    }

    let reportEmbed = new Discord.RichEmbed()
    .setTitle("Reports")
    .setColor("#15f153")
    .addField("Warned User", `${rUser} with ID: ${rUser.id}`)
    .addField("Warned By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "incidents");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  };
  
  module.exports.help = {
    name: "warn",
    category: "Moderation",
    description: "warns a user",
    usage: "warn @<user>"
  };
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("You need to mention someone!");
    let bReason = args.slice(1).join(" ")
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't do that :(");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be banned!");

    let banEmbed = new Discord.RichEmbed()
    .setTitle("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  };
  
  module.exports.help = {
    name: "ban",
    category: "Moderation",
    description: "Ban a user",
    usage: "ban @<user>"
  };
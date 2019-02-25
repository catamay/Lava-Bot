const Discord = require("discord.js");

module.exports = async (client, messageDelete) => {
    let rUser = messageDelete.guild.member(messageDelete.author.id)
    let reportEmbed = new Discord.RichEmbed()
    .setTitle("Deleted Message")
    .setColor("ffffff")
    .addField("Message Author", `${rUser} with ID: ${rUser.id}`)
    .addField("Message Content", `${messageDelete.content}`)
    .addField("Channel", messageDelete.channel)
    .addField("Time", messageDelete.createdAt)

    let reportschannel = messageDelete.guild.channels.find(`name`, "incidents");
    if(!reportschannel) return messageDelete.channel.send("Couldn't find reports channel.");
    reportschannel.send(reportEmbed);
}
const Discord = require("discord.js");

/**
 * This is imported into the Events directory to clean up bot.js
 */
module.exports = async (client, guild) => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`on ${client.guilds.size} servers | +`);

}
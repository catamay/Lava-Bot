const Discord = require("discord.js");

/**
 * This is imported into the Events directory to clean up bot.js
 */
module.exports = async (client, guild) => {
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`on ${client.guilds.size} servers | +`);
}


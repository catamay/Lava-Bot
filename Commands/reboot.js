module.exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
    if(message.member.permissions.has("ADMINISTRATOR")){  
        await message.reply("Bot is shutting down.");
        client.commands.forEach( async cmd => {
            await client.unloadCommand(cmd);
        });
        process.exit(1);
    }else{
        message.reply("You can't do that :(");
    };
};
  
  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  };
  
  module.exports.help = {
    name: "reboot",
    category: "Utility",
    description: "Shuts down the bot. If running under PM2, bot will restart automatically.",
    usage: "reboot"
  };
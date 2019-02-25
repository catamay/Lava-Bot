module.exports.run = async (client, message, args) => {
    if(message.member.permissions.has("ADMINISTRATOR")){  
      const commandName = args[0];
      // Check if the command exists and is valid
      if(!client.commands.has(commandName)) {
        return message.reply("You didn't put in a command or the command doesn't exist!");
      }
      // the path is relative to the *current folder*, so just ./filename.js
      delete require.cache[require.resolve(`./${commandName}.js`)];
      // We also need to delete and reload the command from the client.commands Enmap
      client.commands.delete(commandName);
      const props = require(`./${commandName}.js`);
      client.commands.set(commandName, props);
      message.reply(`The command ${commandName} has been reloaded`);
    }else{
      message.reply("sorry... You can't do that :(")
    }
}

  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  };
  
  module.exports.help = {
    name: "reload",
    category: "Utility",
    description: "reloads commands",
    usage: "reload {command name}"
  };
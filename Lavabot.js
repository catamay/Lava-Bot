const config = require("./botconfig.json");
const Discord = require("discord.js");
const readdir = require('fs').readdir;
const client = new Discord.Client({
    autorun: true
  })
client.config = config;
// This loop reads the /events/ folder and attaches each event file to the appropriate event.
readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      // If the file is not a JS file, ignore it (thanks, Apple)
      if (!file.endsWith(".js")) return;
      // Load the event file itself
      const event = require(`./events/${file}`);
      // Get just the event name from the file name
      let eventName = file.split(".")[0];
      // super-secret recipe to call events with all their proper arguments *after* the `client` var.
      // without going into too many details, this means each event will be called with the client argument,
      // followed by its "normal" arguments, like message, member, etc etc.
      // This line is awesome by the way. Just sayin'.
      client.on(eventName, event.bind(null, client));
    });
  });

  client.commands = new Discord.Collection();
  client.aliases  = new Discord.Collection();
  readdir('./commands/', (err, files) => {
    if (err) throw err;
    console.log(`Loading ${files.length} commands!`);
    files.forEach(f => {
      try {
        let commandFile = require(`./commands/${f}`);
        //console.log(`${files.help.name} command is loading`);
        client.commands.set(commandFile.help.name, commandFile);
        commandFile.conf.aliases.forEach(alias => {
          client.aliases.set(alias, commandFile.help.name);
        });
      } catch (e) {
        console.log(`Unable to load command ${f}: ${e}`);
      }
    });
    console.log(`commands loaded!`);
  });
  client.on("messageUpdate", (oldMessage, newMessage) =>{
      if(oldMessage.author.bot){
        return
      }

    let reportschannel = oldMessage.guild.channels.find(`name`, "incidents");
    if(!reportschannel) return oldMessage.channel.send("Couldn't find reports channel.");
    reportschannel.send({embed: new Discord.RichEmbed()
      .setTitle("Edited Message")
      .setColor("85839f")
      .addField("Message Author", '\u200B' + oldMessage.author.tag)
      .addField("Old Message Content", `\u200B${oldMessage.content}`)
      .addField("New Message Content", `\u200B${newMessage.content}` )
      .addField("Channel", '\u200B' + oldMessage.channel)
      .addField("Time", '\u200B' + newMessage.createdAt)
      }).catch(console.error)
  })
client.login(config.token);
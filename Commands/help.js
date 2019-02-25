exports.run = (client, message, args) => {
	const Discord = require('discord.js');
	if (!args[0]) {

		for (i=0; i<=Math.floor(client.commands.size/24); i++) {
			var helpbox = new Discord.RichEmbed();
			helpbox.setAuthor(client.user.username,client.user.avatarURL)
      .setTitle("Command List")
  			.setDescription(`Use &help <commandname> for details`)
        .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]);
			if (i==Math.floor(client.commands.size/24)){
				x = client.commands.size%24;
			} else {
				x = 20;
			}
			for (y=0; y<x; y++) {
				c = client.commands.array()[i*24+y];
				helpbox.addField(c.help.name, c.help.description)
			}
			message.channel.send({embed: helpbox})
		}
	} else {
		let command = '';
		if (client.commands.has(args[0])) {
			command = client.commands.get(args[0]);
		} else if (client.aliases.has(args[0])) {
			command = client.commands.get(client.aliases.get(args[0]));
		};
		if (!command) return message.reply(`Are you sure that command exists?`);
		var helpCommand = new Discord.RichEmbed();
		helpCommand.setAuthor(client.user.username,client.user.avatarURL)
			.setTitle(command.help.name)
			.addField('Description', `${command.help.description}`)
			.addField('Category', `${command.help.category}`)
			.addField('Usage', `&${command.help.usage}`)
			.setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
		if (command.conf.aliases != "") {
			helpCommand.addField('Aliases', `${command.conf.aliases.join(', ')}`)
		}
		message.channel.send({
			embed: helpCommand
		});
	};
};
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['h', 'halp'],
	botPerms: [],
	memberPerms: []
};
exports.help = {
	name: 'help',
	category: 'General',
	description: 'Displays what Lava Bot can do',
	usage: 'help <command [optional]>'
};
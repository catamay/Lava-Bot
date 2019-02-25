const Discord = require("discord.js");
const config = require("../botconfig.json");
const active = new Map();

module.exports = async (client, message) => {
    if(message.author.bot) return;
    try{
    console.log (message.guild.name + ' (' + message.guild.id + ') ' 
                 + '\n' + message.guild.member(message.author.id).displayName + ' (' + message.author.username + ' ID: ' + message.author.id + ')'  + ' in ' + message.channel.name 
                 + '\n' + message.content 
                 + '\n' + message.createdAt +'\n')
    }catch(error){
        console.log (' (' + message.channel.id + ') ' 
        + '\n' + ' (' + message.author.username + ' ID: ' + message.author.id + ')'  + ' in ' + 'DMs' 
        + '\n' + message.content 
        + '\n' + message.createdAt +'\n')
    }
    /**
     *  Prefix for Commands
     */
    {
        let prefix = config.prefix
        let messageArray = message.content.split(" ")
        let cmd = messageArray[0];
        let args = messageArray.slice(1);
        let ops = {
            active: active
        }
        if(message.content.indexOf(prefix) !== 0) return;
        let commandfile = client.commands.get(cmd.slice(prefix.length))|| client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
        if(commandfile) commandfile.run(client,message,args, ops)
    }

    /**
     * Message related fun stuff ig for Shell's Server
     */
    {
        const textMessage = message.content.toLowerCase();
        if(message.guild.id = config.shellserverid){

        }
    }

}
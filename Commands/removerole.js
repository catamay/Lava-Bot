module.exports.run = async (client, message, args) => {
    let ping = message.mentions.users.first();
  
    if(ping !=null){
      if(message.member.hasPermission("MANAGE_ROLES")){
        let rMember = message.guild.member(ping)
        if(!rMember){ 
          return message.channel.send(message.author.username + " Hey, I Couldn't find that user");
        }
        let role = args.slice(1).join(" ")
        if(!role){
          return message.channel.send(message.author.username + " Specify a role!");
        }
        let gRole = message.guild.roles.find(r => r.name === role);
        if(!gRole){ 
          return message.channel.send(message.author.username + " I Couldn't find that role.");
        }
        if(!rMember.roles.has(gRole.id)){
          return message.channel.send(message.author.username + " They don't have that role.");
        }
        
        await(rMember.removeRole(gRole)).catch(console.error);
        message.channel.send(`Removed ${gRole.name} from ${rMember.displayName}!`);
      }else{
        return message.channel.send("Hey, you can't do that " + message.author.username + "!")
      }
    }else{
      let role = args.join(" ")
      if(!role) return message.channel.send(message.author.username + " Specify a role!");
      let gRole = message.guild.roles.find(r => r.name === role);
      if(!gRole) return message.channel.send(message.author.username + " I Couldn't find that role.");
      if(!message.guild.member(message.author.id).roles.has(gRole.id)) return message.channel.send(message.author.username + " you don't have that role.");
        await(message.guild.member(message.author.id).removeRole(gRole.id)).catch(console.error);
        message.channel.send(`Successfully removed ${gRole.name}!`);
    }    
  }
  
    module.exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: []
    };
    
    module.exports.help = {
      name: "removerole",
      category: "Moderation",
      description: "removes a role to yourself or another user",
      usage: "removerole {rolename}"
    };
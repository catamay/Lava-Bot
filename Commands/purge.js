module.exports.run = async (client, message, args) => {
  if(message.member.permissions.has("MANAGE_MESSAGES")){   
    var num = args[0];
    if (!isNaN(num)) {
      message.channel.bulkDelete(parseInt(num)+1);
      message.reply( num + ' messages deleted!')
        .then(msg2 => setTimeout(() => {
          msg2.delete();
        }, 1000));
    } else {
      message.reply ("Please let me know how many messages you would like to delete!");
      } 
  }else{
    message.reply("You can't do that :(")
  }
}
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  };
  
  module.exports.help = {
    name: "purge",
    category: "Moderation",
    description: "Deletes a number of messages",
    usage: "purge {int}"
  };
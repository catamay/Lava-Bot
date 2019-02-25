module.exports.run = async (client, message, args) => {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
  };
  
  module.exports.help = {
    name: "ping",
    category: "General",
    description: "Relays the bot ping",
    usage: "ping"
  };
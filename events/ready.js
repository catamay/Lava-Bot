const Discord = require("discord.js");
const num_RPS = 3
var RPS =
[
    {RPS: 'Rock!'},
    {RPS: 'Paper!'},
    {RPS: 'Scissors!'} 
]
/**
 * This is imported into the Events directory to clean up bot.js
 */
module.exports = async (client, ready) => {
    // This event will run if the bot starts, and logs in, successfully.
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    // Example of changing the bot's playing game to something useful. `client.user` is what the
    // docs refer to as the "ClientUser".
    setInterval(() => {

        setTimeout(()=>{
            client.user.setActivity("Rock Paper Scissors!");

            setTimeout(()=>{
            client.user.setActivity("Ready?");
            
                setTimeout(()=>{
                client.user.setActivity("Go!");

                    setTimeout(()=>{
                        const rand = Math.floor(Math.random() * (num_RPS));  
                        client.user.setActivity(RPS[rand].RPS);
                    }, 3000)
                }, 2500)
            }, 2500)
        }, 4000)

    }, 12000); // Runs this every 12 seconds  
        



}
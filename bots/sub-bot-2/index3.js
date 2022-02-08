const Discord = require('discord.js');
const config3 = require('./config3.json');
const code = require('./code2.js');

const client = new Discord.Client({
    intents:  [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})




// YOUR CODE BELOW HERE


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
    client.user.setStatus('invisible')
    client.user.setActivity("Poro: PoroProxy", {
      type: "PLAYING",
    });
});

client.login(config3.token);













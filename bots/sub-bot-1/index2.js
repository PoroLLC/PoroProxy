const Discord = require('discord.js');
const config2 = require('./config2.json');
const code = require('./code.js');

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

client.login(config2.token);













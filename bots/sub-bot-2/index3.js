const Discord = require('discord.js');
const subToken2 = require('../../tokens.json');

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

// YOUR CODE ABOVE HERE

client.login(subToken2.subToken2);













const Discord = require('discord.js');
const config = require('./config.json');


const client = new Discord.Client({
    intents:  [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})


// Requiring module
const process = require('process') // Uses the NODE.JS process module - it comes with it lol ok k o lxd omg lol ok k

// Prints the output as an object
console.log(process.memoryUsage())

// YOUR CODE BELOW HERE


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
    client.user.setStatus('dnd')
    client.user.setActivity("Poro: PoroProxy", {
      type: "PLAYING",
    });
});

client.login(config.token);













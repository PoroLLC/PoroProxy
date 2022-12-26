const Discord = require('discord.js');
const proxyToken = require('../../tokens.json');

const bootup = require('./../../api/essentials/startupmsg.json')

const client = new Discord.Client({
    intents:  [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

// Proxy starting up. // DO NOT EDIT
console.log(bootup.startupMsg);
console.log("[POROPROXY] Proxy has loaded!")
// DO NOT EDIT

// Requiring module
const process = require('process') // Uses the NODE.JS process module.

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

// YOUR CODE ABOVE HERE

client.login(proxyToken.proxyToken);













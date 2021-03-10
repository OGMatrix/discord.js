const { Client, MessageEmbed } = require("discord.js");
const { token, prefix } = require("./config.json");

const client = new Client();

client.on("ready", async() => {
    console.log(`Bot ready as ${client.user.tag}`)
});

client.on("message", async(message) => {
    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send("Pong!")
    }
});

client.login(token);
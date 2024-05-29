const Discord = require('discord.js');
const client = new Discord.Client();
const antiSwearWords = require("anti-swear-words-packages-discord");
const swearwords = require('./swearwords.json');
const config = require('./config.json');

// Informacje o logowaniu

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', async message => {

    if (!message.guild || message.author.bot) return;
    antiSwearWords(client, message, {
        ignoreWord: swearwords.json
    });
    
    // message.delete();
    message.channel.send(`<@${message.author.id}> użył przekleństwa`)
});

client.login(config.token)

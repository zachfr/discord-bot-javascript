const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '!';


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === prefix + 'ping') {
        msg.reply('pong!');
    }else if (msg.content === prefix + 'prefix') {
        msg.reply('The currently prefix is ' + prefix);
    }
});

client.login('NzI0NzcwODg1MzgyMzA3ODky.XvFEOQ.ZL9yMT254tEgZlfJHsYTgZY4Q7A');
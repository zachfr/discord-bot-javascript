const Discord = require('discord.js');
const client = new Discord.Client();
var auth = require('./auth.json');
var package = require('./package.json');

var prefix = '!';
var TOKEN = auth.token;
var VERSION = package.version;
var AUTHOR = package.author;
var DESCRIPTION = package.description;


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === prefix + 'ping') {
        msg.reply('pong!');
    }else if (msg.content === prefix + 'prefix') {
        msg.reply('The currently prefix is ' + prefix);
    } else if (msg.content === prefix + 'join message') {
        const embed = new Discord.MessageEmbed()
            .setTitle('Join Message plugin')
            .setURL('https://songoda.com/marketplace/product/join-message-joinmessage.378')
            .setColor(0xff9800)
            .setDescription('Custom join/leave message')
            .setFooter('Zach_FRss Plugin');
        msg.channel.send(embed);
    } else if (msg.content === prefix + 'setprefix') {
        prefix = '/';
    } else if (msg.content === prefix + 'version') {
        msg.channel.send(info);
    }
});

const info = new Discord.MessageEmbed()
    .setTitle('Bot information')
    .setColor(0xff9800)

client.login(TOKEN);
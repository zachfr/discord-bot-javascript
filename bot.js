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
    if (msg.content === prefix + 'prefix') {
        msg.reply('The currently prefix is ' + prefix);
    } else if (msg.content === prefix + 'setprefix') {
        prefix = '/';
    } else if (msg.content === prefix + 'info') {
        msg.channel.send(info);
    } else if (msg.content === prefix + 'join message') {
        msg.channel.send(joinmessage);
    }
});

const info = new Discord.MessageEmbed()
    .setTitle('Bot information')
    .setColor(0xff9800)
    .setDescription(DESCRIPTION)
    .addField('Author', AUTHOR, true)
    .addField('Version', VERSION, true)
    /*.addFields(
        {name: '1', value:'d'},
        {name: '\u200b', value:'\u200b'},
    )*/
const joinmessage = new Discord.MessageEmbed()
    .setTitle('Join Message plugin')
    .setURL('https://songoda.com/marketplace/product/join-message-joinmessage.378')
    .setColor(0xff9800)
    .setDescription('Custom join/leave message')
    .setFooter('Zach_FRss Plugin');


client.login(TOKEN);
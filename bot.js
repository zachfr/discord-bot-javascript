const Discord = require('discord.js');
const client = new Discord.Client();
var auth = require('./auth.json');
var package = require('./package.json');
var request = require('request');

var prefix = '!';
var TOKEN = auth.token;
var VERSION = package.version;
var ACTIVITY = '';
var AUTHOR = package.author;
var DESCRIPTION = package.description;
var UPTIME = client.uptime;
var options = {
    'method': 'GET',
    'url': 'https://songoda.com/api/v2/products/join-message-joinmessage',
    'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(ACTIVITY, { type: 'WATCHING' });
});

client.on('message', msg => {
    const args = msg.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
    if (msg.content === prefix + 'prefix') {
        msg.channel.send(`My currently prefix is **${prefix}**`);
    } else if (command === 'setprefix') {
        if (!args.length) {
            return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
        } else {
            prefix = `${args[0]}`;
            msg.channel.send(`You set the status to **${prefix}**`);
        }
    } else if (msg.content === prefix + 'info') {
        msg.channel.send(info);
    } else if (msg.content === prefix + 'join message') {
        msg.channel.send(joinmessage);
    } else if (msg.content === prefix + 'test') {
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
        });
    } else if (command === 'setstatus') {
        if (!args.length) {
            return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
        } else {
            ACTIVITY = `${args[0]}`;
            msg.channel.send(`You set the status to **${ACTIVITY}**`);
            client.user.setActivity(ACTIVITY, { type: 'WATCHING' });
        }
    } else if (msg.content === prefix + 'status') {
        if (ACTIVITY === '') {
            msg.channel.send('Nobody set status for me')
        } else {
            msg.channel.send(`My currently status is **${ACTIVITY}**`);
        }
    }
});

const info = new Discord.MessageEmbed()
    .setTitle('Bot information')
    .setColor(0xff9800)
    .setDescription(DESCRIPTION)
    .addField('Author', AUTHOR, true)
    .addField('Version', VERSION, true)
    .addField('Uptime', UPTIME, true)
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
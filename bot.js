const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require("node-fetch");
var auth = require('./auth.json');
var package = require('./package.json');
var request = require('request');
var songoda = require('./songoda.js');

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
    const args = msg.content.split(" ");
    const command = args[0];
    args.shift();
    if (command === prefix + 'prefix') {
        msg.channel.bulkDelete(1, true);
        msg.channel.send(`My currently prefix is **${prefix}**`);
    } else if (command === prefix + 'setprefix') {
        msg.channel.bulkDelete(1, true);
        if (!args.length) {
            return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
        } else {
            prefix = `${args[0]}`;
            msg.channel.send(`You set the status to **${prefix}**`);
        }
    } else if (command === prefix + 'info') {
        msg.channel.bulkDelete(1, true);
        msg.channel.send(info);
    } else if (commad === prefix + 'join message') {
        msg.channel.bulkDelete(1, true);
        msg.channel.send(joinmessage);
    } else if (command === prefix + 'test') {
        msg.channel.bulkDelete(1, true);
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
        });
    } else if (command === prefix + 'setstatus') {
        msg.channel.bulkDelete(1, true);
        if (!args.length) {
            return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
        } else {
            ACTIVITY = `${args[0]}`;
            msg.channel.send(`You set the status to **${ACTIVITY}**`);
            client.user.setActivity(ACTIVITY, { type: 'WATCHING' });
        }
    } else if (command === prefix + 'status') {
        msg.channel.bulkDelete(1, true);
        if (ACTIVITY === '') {
            msg.channel.send('Nobody set status for me')
        } else {
            msg.channel.send(`My currently status is **${ACTIVITY}**`);
        }
    } else if (command === prefix + 'purge') {
		const amount = parseInt(args[0]) + 1;
		if (isNaN(amount)) {
			return msg.reply('That doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return msg.reply('You need to input a number between 1 and 99.');
		}
		msg.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			msg.channel.send('There was an error trying to purge messages in this channel!');
		});
	} else if (command === 'help') {
        msg.channel.send(help);
    } else if (command === prefix + 'songoda') {
       if(args.length >= 2){
          fetch("https://songoda.com/api/v2/products/"+args.join("-").toLowerCase())
          .then(res => res.json())
          .then(json => {
            if(!cont) {
              let eb = new Discord.MessageEmbed()
              .setTitle(":x: Error!")
              .setDescription("```Unable to find a plugin with the name "+args.join("")+"```");
              msg.channel.send(eb);
              return;
            }
            if(json.data == null){
              let eb = new Discord.MessageEmbed()
              .setTitle(":x: Error!")
              .setDescription("```Unable to find a plugin with the name "+args.join("")+"```");
              msg.channel.send(eb);
              return;
            }
            let eb = new Discord.MessageEmbed()
              .setDescription(json.data.description);
            eb.setAuthor(json.data.name, json.data.icon, json.data.url);
            // e.f(eb, "❯ Author", "");
            eb.addField("❯ Version", json.data.versions[0].version, false);
            eb.addField("❯ File", json.data.versions[0].size, true);
            eb.addField("❯ Downloads", json.data.downloads, true);
            let rating = Math.round(json.data.rating);
            let ratingmsg = '';
            for (let i = 0; i < rating; i++) {
              ratingmsg += '⭐';
            }
            if (ratingmsg == '') ratingmsg = 'No ratings';
            eb.addField("❯ Rating", ratingmsg, true);
            msg.channel.send(eb);
          });

        } else {
          let eb = new Discord.MessageEmbed()
          .setTitle(":x: Wrong Usage!")
          .setDescription("Usage: !!songoda plugin <Plugin>");
          msg.channel.send(eb);
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
    .setFooter('Zach_FRs Plugin');
    /*.addFields(
        {name: '1', value:'d'},
        {name: '\u200b', value:'\u200b'},
    )*/
const joinmessage = new Discord.MessageEmbed()
    .setTitle('Join Message plugin')
    .setURL('https://songoda.com/marketplace/product/join-message-joinmessage.378')
    .setColor(0xff9800)
    .setDescription('Custom join/leave message')
    .setFooter('Zach_FRs Plugin');

const help = new Discord.MessageEmbed()
    .setTitle('Help center')
    .setFooter('Zach_FRs plugin');
client.login(TOKEN);

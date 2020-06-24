const fs = require('fs');
const Discord = require('discord.js');
const node = require('nodeactyl');
const client = new Discord.Client();
const application = node.Client;
const fetch = require("node-fetch");
var auth = require('./auth.json');
var package = require('./package.json');
var request = require('request');
var config = require('./config.json');
var status = require('./commands/setstatus.js');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

var prefix = config.prefix;
var TOKEN = auth.token;
var STATUS = 'HI?';

/*var options = {
    'method': 'GET',
    'url': 'https://songoda.com/api/v2/products/join-message-joinmessage',
    'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};*/

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(STATUS, { type: 'WATCHING' });
});

application.login(auth.HOST, auth.API, (logged_in, msg) => {
    console.log(logged_in);
});


client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	const args = msg.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        
    if (!command) return;
	try {
		command.execute(msg, args);
	} catch (error) {
		console.error(error);
		msg.reply('There was an error trying to execute that command!');
	}
});

client.login(TOKEN);

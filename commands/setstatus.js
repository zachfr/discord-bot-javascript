const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'setstatus',
	description: 'Show status',
	execute(msg, args) {
		/*if (!args.length) {
			return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
		} else {
			STATUS = args[0];
			msg.channel.send(`You set the status to **${STATUS}**`);
			client.user.setActivity(STATUS, { type: 'WATCHING' });
		}*/
		msg.channel.send(`This command is not avaible yet, ${msg.author}!`);
	},
};
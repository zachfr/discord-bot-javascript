var config = require('../config.json');


module.exports = {
    name: 'setprefix',
	description: 'Set prefix of bot',
	execute(msg, args) {
        msg.channel.send(`This command is not avaible yet, ${msg.author}!`);
		/*if (!args.length) {
            return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
        } else {
            config.prefix = `${args[0]}`;
            msg.channel.send(`You set the prefix to **${config.prefix}**`);
        }*/
	},
};
const config = require('../config.json');

module.exports = {
    name: 'prefix',
	description: 'Show prefix',
	execute(msg, args) {
		msg.channel.send(`My currently prefix is **${config.prefix}**`);
	},
};
const config = require('../config.json');

module.exports = {
    name: 'status',
	description: 'Show status',
	execute(msg, args) {
		msg.channel.send(`My currently status is **${config.status}**`);
	},
};
const p = require('../bot.js');

module.exports = {
    name: 'status',
	description: 'Show status',
	execute(msg, args) {
		msg.channel.send(`My currently status is **${p.STATUS}**`);
	},
};
module.exports = {
	name: 'purge',
	description: 'Delete message',
	execute(msg, args) {
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
	},
};
module.exports = {
	name: 'hi',
	description: 'Hey',
	execute(msg, args) {
		msg.channel.send('Hey!');
	},
};
const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '!';


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === prefix + 'ping') {
        msg.reply('pong!');
    }else if (msg.content === prefix + 'prefix') {
        msg.reply('The currently prefix is ' + prefix);
    } else if (msg.content === prefix + 'join message') {
        const embed = new Discord.MessageEmbed()
            .setTitle('Join Message plugin')
            .setURL('https://songoda.com/marketplace/product/join-message-joinmessage.378')
            .setColor(0xff9800)
            .setDescription('Custom join/leave message')
            .setFooter('Zach_FRs Plugin');
        msg.channel.send(embed);
    }
});

client.login('NzI0NzcwODg1MzgyMzA3ODky.XvFp1g.1Foj0NpF_8vgiux8spMyM-380UM');
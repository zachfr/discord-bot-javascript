const Discord = require('discord.js');
const node = require('nodeactyl');
const client = new Discord.Client();
const application = node.Client;
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

application.login(auth.HOST, auth.API, (logged_in, msg) => {
    console.log(logged_in);
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
    } else if (command === prefix + 'join message') {
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
	} else if (command === prefix + 'help') {
        msg.channel.send(help);
    } else if (command === prefix + 'songoda') {
       if(args.length >= 2){
          fetch("https://songoda.com/api/v2/products/"+args.join("-").toLowerCase())
          .then(res => res.json())
          .then(json => {
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
          .setDescription("Usage: !songoda plugin <Plugin>");
          msg.channel.send(eb);
        }
    } else if (command === prefix + 'server') {
        if (args[0] === 'stats') {
            if (args[1] === '1.15') {
                application.getServerInfo('7263b879').then(response => {
                    application.getRAMUsage('7263b879').then(ram => {
                        application.getDiskUsage('7263b879').then(disk => {
                            application.getCPUUsage('7263b879').then(cpu => {
                                let ab = new Discord.MessageEmbed()
                                    ab.setDescription('Minecraft server 1.15.2')
                                    ab.addField("❯ Name of server", response.attributes.name, true);
                                    ab.addField("❯ Max Memory", `${ram.current}/${response.attributes.limits.memory}GB`, true);
                                    ab.addField("❯ Max Disk space", `${disk.current}/${response.attributes.limits.disk}MB`, true);
                                    ab.addField("❯ Cpu usage", `${cpu.current}%`, true);
                                msg.channel.send(ab);
                            })
                        })
                    })
                })
            } else if (args[1] === '1.12') {
                application.getServerInfo('355c9866').then(response => {
                    application.getRAMUsage('355c9866').then(ram => {
                        application.getDiskUsage('355c9866').then(disk => {
                            application.getCPUUsage('355c9866').then(cpu => {
                                let ab = new Discord.MessageEmbed()
                                    ab.setDescription('Minecraft server 1.15.2')
                                    ab.addField("❯ Name of server", response.attributes.name, true);
                                    ab.addField("❯ Max Memory", `${ram.current}/${response.attributes.limits.memory}GB`, true);
                                    ab.addField("❯ Max Disk space", `${disk.current}/${response.attributes.limits.disk}MB`, true);
                                    ab.addField("❯ Cpu usage", `${cpu.current}%`, true);
                                msg.channel.send(ab);
                            })
                        })
                    })
                })
            } else if (args[1] === '1.8') {
                application.getServerInfo('9b3290a8').then(response => {
                    application.getRAMUsage('9b3290a8').then(ram => {
                        application.getDiskUsage('9b3290a8').then(disk => {
                            application.getCPUUsage('9b3290a8').then(cpu => {
                                let ab = new Discord.MessageEmbed()
                                    ab.setDescription('Minecraft server 1.15.2')
                                    ab.addField("❯ Name of server", response.attributes.name, true);
                                    ab.addField("❯ Max Memory", `${ram.current}/${response.attributes.limits.memory}GB`, true);
                                    ab.addField("❯ Max Disk space", `${disk.current}/${response.attributes.limits.disk}MB`, true);
                                    ab.addField("❯ Cpu usage", `${cpu.current}%`, true);
                                msg.channel.send(ab);
                            })
                        })
                    })
                })
            } else if (args[1] === 'bot') {
                application.getServerInfo('0935a9c9').then(response => {
                    application.getRAMUsage('0935a9c9').then(ram => {
                        application.getDiskUsage('0935a9c9').then(disk => {
                            application.getCPUUsage('0935a9c9').then(cpu => {
                                let ab = new Discord.MessageEmbed()
                                    ab.setDescription('Minecraft server 1.15.2')
                                    ab.addField("❯ Name of server", response.attributes.name, true);
                                    ab.addField("❯ Max Memory", `${ram.current}/${response.attributes.limits.memory}GB`, true);
                                    ab.addField("❯ Max Disk space", `${disk.current}/${response.attributes.limits.disk}MB`, true);
                                    ab.addField("❯ Cpu usage", `${cpu.current}%`, true);
                                msg.channel.send(ab);
                            })
                        })
                    })
                })
            }
        } else if (args[0] === 'kill') {
            if (args[1] === '1.15') {
                application.killServer('7263b879').then(response => {
                    msg.channel.send(`You have successfully kill server ${args[1]}, ${msg.author}!`);
                })
            } else if (args[1] === '1.12') {
                application.killServer('355c9866').then(response => {
                    msg.channel.send(`You have successfully kill server ${args[1]}, ${msg.author}!`);
                })
            } else if (args[1] === '1.8') {
                application.killServer('9b3290a8').then(response => {
                    msg.channel.send(`You have successfully kill server ${args[1]}, ${msg.author}!`);
                })
            } else if (args[1] === 'bot') {
                application.killServer('0935a9c9').then(response => {
                    msg.channel.send(`You have successfully kill server ${args[1]}, ${msg.author}!`);
                })
            } else {
                msg.channel.send(`You didn't provide server, ${msg.author}!`);
            }
        } else if (args[0] === 'stop') {
            if (args[1] === '1.15') {
                application.stopServer('7263b879').then(response => {
                    msg.channel.send(`You have successfully stop server ${args[1]}, ${msg.author}!`);
                })
            } else if (args[1] === '1.12') {
                application.stopServer('355c9866').then(response => {
                    msg.channel.send(`You have successfully stop server ${args[1]}, ${msg.author}!`);
                })
            } else if (args[1] === '1.8') {
                application.stopServer('9b3290a8').then(response => {
                    msg.channel.send(`You have successfully stop server ${args[1]}, ${msg.author}!`);
                })
            } else if (args[1] === 'bot') {
                application.stopServer('0935a9c9').then(response => {
                    msg.channel.send(`You have successfully stop server ${args[1]}, ${msg.author}!`);
                })
            } else {
                msg.channel.send(`You didn't provide server, ${msg.author}!`);
            }
        } else if (args[0] === 'start') {
            if (args[1] === '1.15') {
                application.startServer('7263b879').then(response => {
                    msg.channel.send(`You have successfully start server ${args[1]}, ${msg.author}!`);
                })
            } else if (args[1] === '1.12') {
                application.startServer('355c9866').then(response => {
                    msg.channel.send(`You have successfully start server ${args[1]}, ${msg.author}!`);
                })
            } else if (args[1] === '1.8') {
                application.startServer('9b3290a8').then(response => {
                    msg.channel.send(`You have successfully start server ${args[1]}, ${msg.author}!`);
                })
            } else if (args[1] === 'bot') {
                application.startServer('0935a9c9').then(response => {
                    msg.channel.send(`You have successfully start server ${args[1]}, ${msg.author}!`);
                })
            } else {
                msg.channel.send(`You didn't provide server, ${msg.author}!`);
            }
        } else if (args[0] === 'restart') {
            if (args[1] === '1.15') {
                application.restartServer('7263b879').then(response => {
                    msg.channel.send(`You have successfully restart server ${args[1]}, ${msg.author}!`);
                })
            } else if (args[1] === '1.12') {
                application.restartServer('355c9866').then(response => {
                    msg.channel.send(`You have successfully restart server ${args[1]}, ${msg.author}!`);
                })
            } else if (args[1] === '1.8') {
                application.restartServer('9b3290a8').then(response => {
                    msg.channel.send(`You have successfully restart server ${args[1]}, ${msg.author}!`);
                })
            } else if (args[1] === 'bot') {
                application.restartServer('0935a9c9').then(response => {
                    msg.channel.send(`You have successfully restart server ${args[1]}, ${msg.author}!`);
                })
            } else {
                msg.channel.send(`You didn't provide server, ${msg.author}!`);
            }
        } else if (args[0] === 'exe') {
            if (args[1] === '1.15') {
                application.sendCommand('7263b879', `${args[2]} ${args[3]}`).then(response => {
                    msg.channel.send(`You have successfully send commands on server ${args[1]}, ${args[2]} ${args[3]}, ${msg.author}!`);
                })
            }
        } else if (args[0] === 'help') {
            msg.channel.send(helpserver);
        } else {
            msg.channel.send(helpserver);
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
    .setFooter("Zach_FR's plugin");
    /*.addFields(
        {name: '1', value:'d'},
        {name: '\u200b', value:'\u200b'},
    )*/
const joinmessage = new Discord.MessageEmbed()
    .setTitle('Join Message plugin')
    .setURL('https://songoda.com/marketplace/product/join-message-joinmessage.378')
    .setColor(0xff9800)
    .setDescription('Custom join/leave message')
    .setFooter("Zach_FR's plugin");

const help = new Discord.MessageEmbed()
    .setTitle('Help center')
    .addField("❯ !help", 'Show help center', true)
    .addField("❯ !server help", 'Show help center server', true)
    .addField("❯ !songoda", 'Search plugin on Songoda', true)
    .addField("❯ !status", 'Show currently status of bot', true)
    .addField("❯ !setstatus", 'Set status of bot', true)
    .addField("❯ !join message", 'Show Join message plugin', true)
    .addField("❯ !info", 'Show information on bot', true)
    .addField("❯ !prefix", 'Show currently prefix of bot', true)
    .addField("❯ !setprefix", 'Set prefix of bot', true)
    .setFooter("Zach_FR's plugin");

const helpserver = new Discord.MessageEmbed()
    .setTitle('Help center (Server)')
    .addField("❯ !server stats <name>", 'Show information on server', true)
    .addField("❯ !server kill <name>", 'Kill server', true)
    .addField("❯ !server start <name>", 'Start server', true)
    .addField("❯ !server restart <name>", 'Restart server', true)
    .addField("❯ !server stop <name>", 'Stop server', true)
    .addField("❯ !server exe <name> <command>", 'Send a command on server', true)
    .addField("❯ Name of server", '1.15, 1.12, 1.8, bot', true)
    .setFooter("Zach_FR's plugin");
client.login(TOKEN);

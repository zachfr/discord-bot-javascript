const node = require('nodeactyl');
const Discord = require('discord.js');
const client = new Discord.Client();
const application = node.Client;

module.exports = {
	name: 'server',
	description: 'Main command to server!',
	execute(msg, args) {
        var STAFF = msg.member.roles.cache.has('724816981102034954');
		if (args[0] === 'stats') {
            if (STAFF) {
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
                } else {
                    msg.channel.send(`You didn't provide server, ${msg.author}!`);
                }
            } else {
                msg.channel.send(`You don't have the permision to do that, ${msg.author}!`);
            }
        } else if (args[0] === 'kill') {
            if (STAFF) {
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
            } else {
                msg.channel.send(`You don't have the permision to do that, ${msg.author}!`);
            }
        } else if (args[0] === 'stop') {
            if (STAFF) {
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
            } else {
                msg.channel.send(`You don't have the permision to do that, ${msg.author}!`);
            }
        } else if (args[0] === 'start') {
            if (STAFF) {
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
            } else {
                msg.channel.send(`You don't have the permision to do that, ${msg.author}!`);
            }
        } else if (args[0] === 'restart') {
            if (STAFF) {
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
            } else {
                msg.channel.send(`You don't have the permision to do that, ${msg.author}!`);
            }
        } else if (args[0] === 'exe') {
            if (STAFF) {
                if (args[1] === '1.15') {
                    if (args[10]) {
                        application.sendCommand('7263b879', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]} ${args[9]} ${args[10]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]} ${args[9]} ${args[10]}, ${msg.author}!`);
                        })
                    } else if (args[9]) {
                        application.sendCommand('7263b879', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]} ${args[9]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]} ${args[9]}, ${msg.author}!`);
                        })
                    } else if (args[8]) {
                        application.sendCommand('7263b879', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]}, ${msg.author}!`);
                        })
                    } else if (args[7]) {
                        application.sendCommand('7263b879', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]}, ${msg.author}!`);
                        })
                    } else if (args[6]) {
                        application.sendCommand('7263b879', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]}, ${msg.author}!`);
                        })
                    } else if (args[5]) {
                        application.sendCommand('7263b879', `${args[2]} ${args[3]} ${args[4]} ${args[5]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]}, ${msg.author}!`);
                        })
                    } else if (args[4]) {
                        application.sendCommand('7263b879', `${args[2]} ${args[3]} ${args[4]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]}, ${msg.author}!`);
                        })
                    } else if (args[3]) {
                        application.sendCommand('7263b879', `${args[2]} ${args[3]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]}, ${msg.author}!`);
                        })
                    } else if (args[2]) {
                        application.sendCommand('7263b879', `${args[2]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]}, ${msg.author}!`);
                        })
                    } else {
                        msg.channel.send(`You don't give command, ${msg.author}!`);
                    }
                } else if (args[1] === '1.12') {
                    if (args[10]) {
                        application.sendCommand('355c9866', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]} ${args[9]} ${args[10]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]} ${args[9]} ${args[10]}, ${msg.author}!`);
                        })
                    } else if (args[9]) {
                        application.sendCommand('355c9866', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]} ${args[9]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]} ${args[9]}, ${msg.author}!`);
                        })
                    } else if (args[8]) {
                        application.sendCommand('355c9866', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]}, ${msg.author}!`);
                        })
                    } else if (args[7]) {
                        application.sendCommand('355c9866', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]}, ${msg.author}!`);
                        })
                    } else if (args[6]) {
                        application.sendCommand('355c9866', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]}, ${msg.author}!`);
                        })
                    } else if (args[5]) {
                        application.sendCommand('355c9866', `${args[2]} ${args[3]} ${args[4]} ${args[5]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]}, ${msg.author}!`);
                        })
                    } else if (args[4]) {
                        application.sendCommand('355c9866', `${args[2]} ${args[3]} ${args[4]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]}, ${msg.author}!`);
                        })
                    } else if (args[3]) {
                        application.sendCommand('355c9866', `${args[2]} ${args[3]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]}, ${msg.author}!`);
                        })
                    } else if (args[2]) {
                        application.sendCommand('355c9866', `${args[2]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]}, ${msg.author}!`);
                        })
                    } else {
                        msg.channel.send(`You don't give command, ${msg.author}!`);
                    }
                } else if (args[1] === '1.8') {
                    if (args[10]) {
                        application.sendCommand('9b3290a8', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]} ${args[9]} ${args[10]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]} ${args[9]} ${args[10]}, ${msg.author}!`);
                        })
                    } else if (args[9]) {
                        application.sendCommand('9b3290a8', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]} ${args[9]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]} ${args[9]}, ${msg.author}!`);
                        })
                    } else if (args[8]) {
                        application.sendCommand('9b3290a8', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]}, ${msg.author}!`);
                        })
                    } else if (args[7]) {
                        application.sendCommand('9b3290a8', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]}, ${msg.author}!`);
                        })
                    } else if (args[6]) {
                        application.sendCommand('9b3290a8', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]}, ${msg.author}!`);
                        })
                    } else if (args[5]) {
                        application.sendCommand('9b3290a8', `${args[2]} ${args[3]} ${args[4]} ${args[5]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]}, ${msg.author}!`);
                        })
                    } else if (args[4]) {
                        application.sendCommand('9b3290a8', `${args[2]} ${args[3]} ${args[4]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]}, ${msg.author}!`);
                        })
                    } else if (args[3]) {
                        application.sendCommand('9b3290a8', `${args[2]} ${args[3]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]}, ${msg.author}!`);
                        })
                    } else if (args[2]) {
                        application.sendCommand('9b3290a8', `${args[2]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]}, ${msg.author}!`);
                        })
                    } else {
                        msg.channel.send(`You don't give command, ${msg.author}!`);
                    }
                } else if (args[1] === 'bot') {
                    if (args[10]) {
                        application.sendCommand('0935a9c9', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]} ${args[9]} ${args[10]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]} ${args[9]} ${args[10]}, ${msg.author}!`);
                        })
                    } else if (args[9]) {
                        application.sendCommand('0935a9c9', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]} ${args[9]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]} ${args[9]}, ${msg.author}!`);
                        })
                    } else if (args[8]) {
                        application.sendCommand('0935a9c9', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]} ${args[8]}, ${msg.author}!`);
                        })
                    } else if (args[7]) {
                        application.sendCommand('0935a9c9', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]}, ${msg.author}!`);
                        })
                    } else if (args[6]) {
                        application.sendCommand('0935a9c9', `${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]}, ${msg.author}!`);
                        })
                    } else if (args[5]) {
                        application.sendCommand('0935a9c9', `${args[2]} ${args[3]} ${args[4]} ${args[5]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]} ${args[5]}, ${msg.author}!`);
                        })
                    } else if (args[4]) {
                        application.sendCommand('0935a9c9', `${args[2]} ${args[3]} ${args[4]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]} ${args[4]}, ${msg.author}!`);
                        })
                    } else if (args[3]) {
                        application.sendCommand('0935a9c9', `${args[2]} ${args[3]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]} ${args[3]}, ${msg.author}!`);
                        })
                    } else if (args[2]) {
                        application.sendCommand('0935a9c9', `${args[2]}`).then(response => {
                            msg.channel.send(`You have successfully send a command to server ${args[1]}, ${args[2]}, ${msg.author}!`);
                        })
                    } else {
                        msg.channel.send(`You don't give command, ${msg.author}!`);
                    }
                } else {
                    msg.channel.send(`You didn't provide server, ${msg.author}!`);
                }
            } else {
                msg.channel.send(`You don't have the permision to do that, ${msg.author}!`);
            }
        } else {
            msg.channel.send(`Unknown command use !help server, ${msg.author}`);
        }
	},
};
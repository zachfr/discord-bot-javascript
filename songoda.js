const fetch = require("node-fetch");
const { RichEmbed } = require('discord.js');

module.exports = {
  config: {
    name: 'songoda',
    description: 'Gets information about a Songoda plugin.',
    usage: '<plugin>',
    category: 'general',
    accessableby: 'Members',
    //aliases: [],
  },
  run: async (bot, message, args) => {
    if(args.length >= 2){
          fetch("https://songoda.com/api/v2/products/"+args.join("-").toLowerCase())
          .then(res => res.json())
          .then(json => {
            if(!cont) {
              let eb = new RichEmbed()
              .setTitle(":x: Error!")
              .setDescription("```Unable to find a plugin with the name "+args.join("")+"```");
              message.channel.send(eb);
              return;
            }
            if(json.data == null){
              let eb = new RichEmbed()
              .setTitle(":x: Error!")
              .setDescription("```Unable to find a plugin with the name "+args.join("")+"```");
              message.channel.send(eb);
              return;
            }
            let eb = new RichEmbed()
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
            message.channel.send(eb);
          });

        } else {
          let eb = new RichEmbed()
          .setTitle(":x: Wrong Usage!")
          .setDescription("Usage: !!songoda plugin <Plugin>");
          message.channel.send(eb);
        }
  },
};
const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  var s = message.guild.fetchBans().then(bans => {
  message.channel.send(`Şuanda **${bans.size}** Banlı Kullanıcı Bulunmakta. `)
  })
 };

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['bl'],
  permLevel: 1
};
exports.help = {
  name: "banlar",
  usage: "banlar"
};
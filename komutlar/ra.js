const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField(
        "⚠ **Uyarı** ⚠",
        "`rol-al` **Adlı Komutu Özel Mesajlarda Kullanamazsın!**"
      );
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.reply(
      "❌ Bu Komutu Kullana Bilmek için `Rolleri Yönet` Yetkisine Sahip Olmalısın!"
    );
  let guild = message.guild;
  let rol = message.mentions.roles.first();
  let user = message.mentions.members.first();

  if (!user)
    return message
      .reply("**⚠ Rol Almak İstediğin Kişiyi Yazmalısın!**")
      .catch(console.error);
  if (rol.length < 1) return message.reply("**⚠ Bir Rol Yazmalısın!**");

  user.removeRole(rol);
  const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTimestamp()
    .setDescription(
      `✅  Başarıyla ${user} İsimli Kullanıcıdan ${rol} İsimli Rolü Alındı!`
    )
    .setFooter("Cactus Bot");
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rolal", "ra"],
  permLevel: 0
};
 //Dcs Ekibi
exports.help = {
  name: "rol-al",
  description: "İstediğiniz kişiyi istediğiniz rolü al.",
  usage: "rol-al [kullanıcı] [@rol]"
};
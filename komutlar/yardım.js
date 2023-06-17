const Discord = require("discord.js")

exports.run = async(client, message) => {
  
	
	let prefix = '*'

	const cactus = new Discord.RichEmbed()
       .setAuthor(`Theseus | Yardım`)
       .setColor(`GREEN`)
       .setThumbnail(client.user.avatarURL)
       .setDescription("**Theseus Moderasyon Yardım** \n ➖➖➖➖➖➖ \n \n `.avatar <etiket>` **Kullanıcının Porfilini Atar** \n `.ban <etitek>` **Kullanıcıyı Banlar** \n `.banlist` **Banlı Kullanıcıların Listesini Atar**\n `.id <etitek>` **Kullanıcı ID Atar** \n `.mute <etiket>` **Kullanıcıyı Susturur** \n `.sil <miktar>` **Sohbetten Mesaj Siler** \n `.sohbetkilit` **Sohbeti Kilitler** \n `.unban <id>` **Kullanıcının Banını Kaldırır** \n `.yetkiler` **Sahip Olduğunuz Yetkileri Gösterir**")
  return message.channel.send(cactus)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'menü',
  description: 'Menü',
  usage: 'menü'
};
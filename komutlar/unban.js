const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new RichEmbed().setDescription(`:x: Yetkin yeterli değil!`))
    let user = args[0];
    const banList = await message.guild.fetchBans();
    if (!user || isNaN(user) || !banList.has(user)) {
        return message.channel.send(new RichEmbed().setDescription(`:x: Kullanıcı id hatalı veya kullanıcı yasaklı değil!`))
    }
    message.guild.unban(user);
    message.channel.send(new RichEmbed().setDescription(`:white_check_mark: Başarılı!`))
};

exports.conf = {
    aliases: ["un-ban"]
};

exports.help = {
    name: 'unban'
};
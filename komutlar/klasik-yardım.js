const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.RichEmbed()
        .setColor("#FF8C00")
       .addField("Tüm komutlar", "``Burayı kendinize göre düzenlersiniz hadi eyw``") // Discord.js kodlaması bilinmeden bu komutu kullanmanız sakıncalı olabilir.
    if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        message.channel.send(embedyardim);
    }
};

exports.conf = {
    enabled: true, // Aktifmi? True/False olarak değiştiriniz
    guildOnly: false, // Sadece sunucudamı kullanılsın?
    aliases: ["h", "halp", "help", 'y'], // komut ek kısaltmaları
    permLevel: 0 // 1 Mesajları yönet , 2 Üyeleri yasakla , 3 Sunucu sahibi , 4 Bot sahibi
};

exports.help = {
    name: 'yardım', // Komut adı
};

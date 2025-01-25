const { EmbedBuilder } = require("discord.js");
const Discord = require("discord.js");
const db = require("croxydb");

exports.run = async (client, message, args) => {
    const kullanıcı = message.author;
    const sebep = args.slice(0).join(" ");

    // Sebep kontrolü
    if (!sebep) {
        return message.channel.send(":warning: **Lütfen bir sebep belirtiniz!** Örneğin: `!afk Yemek yiyorum`");
    }

    // "Emin misin?" butonunu oluşturma
    const row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("Evet, eminim! ✅")
                .setStyle(Discord.ButtonStyle.Success)
                .setCustomId("he")
        );

    // Kullanıcıdan onay al
    message.reply({
        content: "🤔 **AFK moduna geçmek istediğinizden emin misiniz?**",
        components: [row]
    }).then(msg => {
        msg.createMessageComponentCollector({
            filter: (interaction) => interaction.user.id === message.author.id,
            time: 15000 // 15 saniye içinde yanıt verilmezse kolektör kapanır
        }).on('collect', async (interaction) => {
            if (interaction.customId === "he") {
                msg.delete();
                message.channel.send(`✅ **Başarılı!** Artık AFK modundasınız. Sebep: \`${sebep}\``);

                // Veritabanına AFK bilgisini kaydet
                db.set(`afk_${kullanıcı.id}`, sebep);
            }
        }).on('end', () => {
            // Kullanıcı butona zamanında tıklamazsa
            if (!msg.deleted) {
                msg.delete();
                message.channel.send(":hourglass: **AFK moduna geçiş iptal edildi!**");
            }
        });
    });
};

exports.conf = {
    aliases: []
};

exports.help = {
    name: "afk"
};

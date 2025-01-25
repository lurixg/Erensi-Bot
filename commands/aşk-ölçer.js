const { EmbedBuilder } = require("discord.js");
const { prefix } = require("../config.js");

exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
    if (!user) {
        return message.channel.send(":warning: **Lütfen birini etiketleyiniz!** Örneğin: `!aşkölçer @Kullanıcı`");
    }

    const tahmin = Math.floor(Math.random() * 99) + 1; // 1-100 arası rastgele sayı
    let kalp;
    let yorum;

    // Tahmine göre sonuçlar
    if (tahmin <= 25) {
        kalp = `❤️🖤🖤🖤🖤🖤`;
        yorum = "💔 **Bu iş olmaz, sen bunu unut.**";
    } else if (tahmin <= 50) {
        kalp = `❤️❤️🖤🖤🖤🖤`;
        yorum = "😊 **Azıcık da olsa bir şeyler hissediyor sana!**";
    } else if (tahmin <= 75) {
        kalp = `❤️❤️❤️🖤🖤🖤`;
        yorum = "🤔 **Eh, biraz biraz bir şeyler var gibi.**";
    } else if (tahmin <= 85) {
        kalp = `❤️❤️❤️❤️🖤🖤`;
        yorum = "💖 **Biraz daha uğraşırsan bu iş olacak gibi!**";
    } else if (tahmin < 100) {
        kalp = `❤️❤️❤️❤️❤️🖤`;
        yorum = "😍 **Oluyor gibi, çok güzel gidiyorsunuz!**";
    } else if (tahmin === 100) {
        kalp = `❤️❤️❤️❤️❤️❤️`;
        yorum = "💍 **Sizi evlendirelim artık! <3**";
    }

    // Embed mesajı
    const embed = new EmbedBuilder()
        .setColor("Red")
        .setTitle("💘 Aşk Ölçer Testi!")
        .setDescription(`💑 **${message.author.username}** ve **${user.username}** için sonuçlar:\n\n📊 **Aşk Yüzdesi:** %${tahmin}\n${kalp}\n\n📝 **Yorum:** ${yorum}`)
        .setFooter({ text: "Aşk Ölçer, tamamen eğlence amaçlıdır. ❤️", iconURL: client.user.displayAvatarURL() });

    // Sonucu gönder
    message.channel.send({ embeds: [embed] });
};

exports.conf = {
    aliases: []
};

exports.help = {
    name: "aşkölçer"
};

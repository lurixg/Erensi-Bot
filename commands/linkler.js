const { EmbedBuilder } = require("discord.js");
const config = require("../config.js");

exports.run = async (client, message, args) => {
    const topgg = config.topgg;
    const davet = config.botdavet;
    const destek = config.desteksunucusu;
    const site = config.website;
    const gizlilik = config.politika;
  
    const embed = new EmbedBuilder()
        .setTitle("🔔 **ErensiBOT Bağlantıları** 🔔")
        .setDescription(`
        🌐 [**Botu Sunucuna Ekle**](${davet})  
        💬 [**Destek Sunucum**](${destek})  
        📜 [**Gizlilik Politikası**](${gizlilik})  
        🔗 [**Web Sayfası**](${site})  
        🗳️ [**Bota Oy Ver**](${topgg})
        `)
        .setColor("#ff0000")
        .setFooter({ text: 'Her zaman en iyisi için!' });
    
    message.channel.send({ embeds: [embed] });
};

exports.conf = {
    aliases: []
};

exports.help = {
    name: "linkler"
};

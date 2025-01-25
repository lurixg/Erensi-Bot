const { EmbedBuilder } = require("discord.js");
const diskord = require("discord.js");
const debe = require("croxydb");
const config = require("../config.js");

exports.run = async (client, message, args) => {
    const topgg = config.topgg;
    const davet = config.botdavet;
    const destek = config.desteksunucusu;
    const value = args[0];

    const embed = new diskord.EmbedBuilder()
        .setTitle("📜 **Kategoriler** 📜")
        .setDescription(`
        ⚙️ **e!yardım ayarlamalı** | Ayarlamalı yetkili komutlarını gösterir.  
        🐼 **e!yardım eğlence** | Eğlence komutlarını gösterir.  
        😞 **e!yardım kullanıcı** | Kullanıcı komutlarını gösterir.  
        👑 **e!yardım yetkili** | Yetkili komutlarını gösterir.  
        🎮 **e!yardım bot** | Bot komutlarını gösterir.  
        🔔 **ErensiBOT Bağlantılar** 🔔  
        [**Botu Sunucuna Ekle**](${davet})  
        [**Destek Sunucum**](${destek})  
        [**Bota Oy Ver**](${topgg})
        `);
    
    if (!args[0]) return message.channel.send({ embeds: [embed] });

    if (value === "bot") {
        const embed = new diskord.EmbedBuilder()
            .setTitle("🎮 **Ana Komutlar** 🎮")
            .setDescription(`
            **e!istatistik** | Botun istatistiklerini gösterir.  
            **e!linkler** | Botla alakalı linkleri alırsınız.  
            **e!oyver** | Botun oy verme linkini ve birkaç bilgi alırsınız.  
            **e!ping** | Botun pingini gösterir.
            `);
        message.channel.send({ embeds: [embed] });
    }

    if (value === "yetkili") {
        const embed = new diskord.EmbedBuilder()
            .setTitle("👑 **Yetkili Komutları** 👑")
            .setDescription(`
            **e!ban** | Etiketlediğiniz kişiyi sunucudan yasaklar.  
            **e!ban-list** | Sunucudan banlanan üyeleri gösterir.  
            **e!forceban** | ID'sini belirttiğiniz kullanıcıyı sunucudan yasaklar.  
            **e!kanal-açıklama** | Bulunduğunuz kanalın konusunu/açıklamasını değiştirir.  
            **e!kick** | İstediğiniz kişiyi sunucudan atar.  
            **e!rol-al** | Belirtilen kullanıcıdan istediğiniz rolü alır.  
            **e!rol-oluştur** | Yazılan adda rol oluşturulur.  
            **e!rol-ver** | Belirtilen kullanıcıya istediğiniz rolü verir.
            `);
        message.channel.send({ embeds: [embed] });
        
        const embed2 = new diskord.EmbedBuilder()
            .setDescription(`
            **e!sesli-çek** | Etiketlediğiniz kullanıcıyı yanınıza çeker.  
            **e!temizle** | Belirtilen miktarda mesajı siler.  
            **e!unban** | Belirtilen kişinin banını kaldırır.  
            **e!slowmode** | Kanalda yavaşmod'u ayarlarsınız.
            `);
        message.channel.send({ embeds: [embed2] });
    }

    if (value === "eğlence") {
        const embed = new diskord.EmbedBuilder()
            .setTitle("🐼 **Eğlence Komutları** 🐼")
            .setDescription(`
            **e!alkış** | Bot alkışlar.  
            **e!aşkölçer** | Bot etiketlediğiniz kişiye karşı olan aşkını ölçer.  
            **e!emojiyazı** | Bot mesajınızı emoji haline getirir.  
            **e!hackle** | Etiketlediğiniz kişiyi hackler.  
            **e!kaçcm** | Malafatının uzunluğunu söyler.
            `);
        message.channel.send({ embeds: [embed] });

        const embed2 = new diskord.EmbedBuilder()
            .setDescription(`
            **e!sarıl** | Etiketlediğiniz kişiye sarılırsınız.  
            **e!slot** | Slots oyununu oynar.  
            **e!şanslısayım** | Bot şanslı sayınızı tahmin eder.
            `);
        message.channel.send({ embeds: [embed2] });
    }

    if (value === "kullanıcı") {
        const embed = new diskord.EmbedBuilder()
            .setTitle("😞 **Kullanıcı Komutları** 😞")
            .setDescription(`
            **e!afk** | AFK olunca seni etiketleyen kişiye sebebini yazar.  
            **e!atatürk** | Rastgele bir Atatürk fotoğrafı gönderir.  
            **e!avatar** | Etiketlediğiniz kişinin avatarını gösterir.  
            **e!emojiler** | Sunucuda bulunan emojileri gösterir.  
            **e!hesapla** | Belirtilen işlemi yapar.  
            **e!kurucu-kim** | Sunucunun kurucusunu söyler.
            `);
        message.channel.send({ embeds: [embed] });

        const embed2 = new diskord.EmbedBuilder()
            .setDescription(`
            **e!minecraft** | Belirlediğiniz Minecraft sunucusunun bilgilerini verir.  
            **e!not-al** | Bot not alır.  
            **e!notum** | Notunuzu gösterir.  
            **e!radyo** | Sesli kanaldan radyo dinlersiniz.  
            **e!sunucubilgi** | Bulunduğun sunucu hakkında bilgi verir.
            `);
        message.channel.send({ embeds: [embed2] });
    }

    if (value === "ayarlamalı") {
        const embed = new diskord.EmbedBuilder()
            .setTitle("⚙️ **Ayarlamalı Komutlar** ⚙️")
            .setDescription(`
            **e!küfürengel** | Küfür engelleme sistemini ayarlamanızı sağlar.  
            **e!reklamengel** | Reklam engelleme sistemini ayarlamanızı sağlar.  
            **e!oto-cevap** | Belirtilen yazıyı biri yazarsa bot belirtilen cevabı vermeye ayarlanır.  
            **e!otorol** | Sunucuya girenlere verilecek olan otorolü ayarlar.  
            **e!ototag** | Bot belirtilen tagı sunucuya girenlerin isimlerinin başına koyar.  
            **e!sa-as** | Oto sa-ası ayarlarsınız.  
            **e!sayaç** | Sayacı ayarlarsınız.
            `);
        message.channel.send({ embeds: [embed] });
    }
};

exports.conf = {
    aliases: []
};

exports.help = {
    name: "yardım"
};

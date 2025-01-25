const Discord = require("discord.js");

exports.run = async (client, message, args) => {


  const random = Math.floor(Math.random() * 99) + 1
  
  message.channel.send(`Malafatın tam **${random}cm** 😊`)




}

  exports.conf = {
  aliases: ["sapık-erensibot"]
};

exports.help = {
  name: "kaçcm"
};
const { MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "images",
  description: "we luv imags homie",
  async execute(client, message, args) {
    const { data: { url } } = await axios.get("https://api.capybara.bar/");
    message.channel.send(url);
  },
};

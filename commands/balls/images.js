const { MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "images",
  description: "we luv imags homie",
  async execute(client, message, args) {
    const response = await axios.get("https://api.capybara.bar/");
    const data = response.data;
    message.channel.send(`${data.url}`);
  },
};

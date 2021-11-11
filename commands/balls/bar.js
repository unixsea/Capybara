const { MessageEmbed } = require("discord.js");
const axios = require("axios");
module.exports = {
  name: "bar",
  description: "we luv bars homie",
  async execute(client, message, args) {
    const response = await axios.get("https://api.stupidapi.com/capybara");
    const data = response.data;
    message.channel.send(`${data.img}`);
  },
};

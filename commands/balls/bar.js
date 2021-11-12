const { MessageEmbed } = require("discord.js");
const axios = require("axios");
module.exports = {
  name: "bar",
  description: "we luv bars homie",
  async execute(client, message, args) {
    const { data: { img } } = await axios.get("https://api.stupidapi.com/capybara");
    message.channel.send(`${img}`);
  },
};

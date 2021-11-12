const { MessageEmbed } = require("discord.js");
const embed = new MessageEmbed()
  .setDescription(
    "**C O M M A N D S**:\n`c+images`\nSends a random capybara image\n`c+videos`\nSends a random capybara video\n`c+bar`\nSends random capybara in a bar images.\n\n** A B O U T **\n`What is the purpose of Capybara?`\nCapybara Is a joke project, made to send Capybara images ~ videos."
  )
  .setFooter("Aurel is so fucking cool.");

module.exports = {
  name: "about",
  description: "we luv imags homie",
  execute(client, message, args) {
    message.channel.send({ embeds: [embed] });
  }
};

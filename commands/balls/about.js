const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "about",
  description: "we luv imags homie",
  execute(client, message, args) {
    const embed = new MessageEmbed()
      .setDescription(
        "**C O M M A N D S**:\n`c+images`\nSends a random capybara image\n`c+videos`\nSends a random capybara video\n`c+bar`\nSends random capybara in a bar images.\n\n** A B O U T **\n`What is the purpose of Capybara?`\nCapybara Is a joke project, made to send Capybara images ~ videos.\n`Is Capybara open-sourced?`\nAs of now, no. But after I'm fully done with this project, hell yea homie!"
      )
      .setFooter("Aurel is so fucking cool.");
    message.channel.send({ embeds: [embed] });
  },
};

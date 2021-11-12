const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "bi",
  description: "we luv imags homie",
  execute(client, message, args) {
    const totalMembers = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0);
    
    const embed = new MessageEmbed()
      .setTitle("Capybara's Information")
      .addField("Users", `\`\`\`${totalMembers}\`\`\``, true)
      .addField("Servers", `\`\`\`${client.guilds.cache.size}\`\`\``, true)
      .addField("Channels", `\`\`\`${client.channels.cache.size}\`\`\``, true);
    
    message.channel.send({ embeds: [embed] });
  },
};

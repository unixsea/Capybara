const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "bi",
  description: "we luv imags homie",
  execute(client, message, args) {
    var totalMembers = 0;
    client.guilds.cache.forEach((guild) => {
      var x = parseInt(guild.memberCount);
      totalMembers = totalMembers + x;
    });
    const embed = new MessageEmbed()
      .setTitle("Capybara's Information")
      .addField("Users", `\`\`\`${totalMembers}\`\`\``, true)
      .addField("Servers", `\`\`\`${client.guilds.cache.size}\`\`\``, true)
      .addField("Channels", `\`\`\`${client.channels.cache.size}\`\`\``, true);
    message.channel.send({ embeds: [embed] });
  },
};

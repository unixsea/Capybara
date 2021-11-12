const { MessageEmbed } = require("discord.js");
const { inspect } = require("util");

const prefix = "c+";
const commandNotFoundEmbed = new MessageEmbed()
  .setTitle(
    "Homie looks like that doesn't command exists."
  )
  .setDescription(
    `Looking for a command? I got you homie, just do c+about to see all my commands and see what I do!`
  )
  .setFooter(
    `${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp();

// Starting our message event.
module.exports = async (Discord, client, message) => {
  // If the mesasge doesn't start with prefix or if its the author / bot just return.
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(/\s+/);
  const cmd = args.shift().toLowerCase();

  const command =
    client.commands.get(cmd) ||
    client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
  
  // If command doesn't exist, send an embed.
  if (!command) return message.channel.send({ embeds: [commandNotFoundEmbed] });
  if (command) {
    try {
      await command.execute(client, message, args, Discord);
    } catch (err) {
      const errorEmbed = new MessageEmbed()
        .setTitle(
          "Homie looks like the bot messed up :("
        )
        .setDescription(
          `\`\`\`js\n${inspect(err)}\`\`\``
        )
        .setFooter(
          `${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp();
      message.channel.send({ embeds: [errorEmbed] });
    }
  }

  //I could've used `else if` but no.
};

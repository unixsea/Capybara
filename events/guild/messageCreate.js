// Starting our message event.
module.exports = async (Discord, client, message) => {
  let prefix = "c+";

  const embed = new Discord.MessageEmbed()
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

  // If the mesasge doesn't start with prefix or if its the author / bot just return.
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command =
    client.commands.get(cmd) ||
    client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
  //If command doesn't exist, send an embed.
  if (!command) return message.channel.send({ embeds: [embed] });
  if (command) command.execute(client, message, args, Discord);

  //I could've used `else if` but no.
};

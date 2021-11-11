// Defining Discord
const Discord = require("discord.js");
const { Collection } = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
// Using fs for directorys
const fs = require("fs");
client.commands = new Collection();
client.events = new Collection();
// Handlers
["command_handler", "event_handler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});
// Logging in.
client.login("INSERT_TOKEN_HERE");

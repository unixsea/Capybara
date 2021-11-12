const fs = require("fs");
const dirNames = ["client", "guild"];

// Starting out event handler
module.exports = (client, Discord) => {
  for (const dirs of dirNames) {
    const event_files = fs
      .readdirSync(`./events/${dirs}`)
      .filter((file) => file.endsWith(".js"));

    for (const file of event_files) {
      const event = require(`../events/${dirs}/${file}`);
      client.on(file.slice(0, -3), event.bind(null, Discord, client));
    }
  }
};

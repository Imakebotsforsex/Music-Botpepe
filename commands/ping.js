module.exports = {
    name: "ping",
    cooldown: 5,
    description: "Show the bot's average ping",
    execute(message) {
      message.reply(`🏓 ${(message.client.ws.ping)} ms`).catch(console.error);
    }
  };
  
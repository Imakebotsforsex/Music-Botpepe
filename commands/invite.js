module.exports = {
    name: "invite",
    description: "Send bot invite link",
    execute(message) {
      return message.member
        .send(
          `https://discord.com/oauth2/authorize?client_id=848999851516493875&scope=bot&permissions=4361029384`
        )
        .catch(console.error);
    }
  };
  
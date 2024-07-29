const { Client, GatewayIntentBits } = require('discord.js'),
    bot = new Client({ intents : [ GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences, GatewayIntentBits.MessageContent ]});

    bot.on('ready', () => console.log('bot online'));


module.exports = {
    login: (token) => bot.login(token),
    bot: bot
};
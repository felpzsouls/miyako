const { Client, GatewayIntentBits, Collection } = require('discord.js'),
    bot = new Client({ intents: [GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages] });

bot.cmds = new Collection();

for(let x of [`cmds`, 'events']) require(`./handlers/${x}`)(bot);

module.exports = {
    login: (token) => bot.login(token),
    bot: bot
};
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription(`pong`),
    run: async(bot, int) => {
        await int.reply('Pong!');
    }
}
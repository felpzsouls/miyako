const data = require('../../models/guild');

module.exports.run = async (bot, int) => {
    let guild = await data.findOne({ id: int.guild.id });

    if (!int.isChatInputCommand()) return;

    const { commandName } = int,
        command = int.client.cmds.get(commandName)

    if(!command) return;

    const channels = guild.restricted.channels || [];
    if(channels.includes(int.channel.id)) return int.reply({ content: `Você não pode usar comandos nesse canal!`, ephemeral: true });

    command.run(bot, int)
};
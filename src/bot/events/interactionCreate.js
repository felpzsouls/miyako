module.exports.run = async (bot, int) => {
    if (!int.isChatInputCommand()) return;

    const { commandName } = int,
        command = bot.cmds.get(commandName);

    if (!command) return;

    command.run(bot, int);
};
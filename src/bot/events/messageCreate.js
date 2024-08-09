const guildSchema = require(`../../models/guild`);

module.exports.run = async (bot, int) => {
    let guild = guildSchema.findOne({ id: int.guild.id }),
        prefix = guild.prefix;

    if (!prefix) prefix = `-`;

    if (!int.content.startsWith(prefix) || int.author.bot) return;

    const args = int.content.slice(prefix.length).trim().split(/  +/),
        command = args.shift().toLowerCase(),
        cmd = int.client.cmds.get(command);

    if (!cmd) return;

    cmd.run(bot, int, args)
}
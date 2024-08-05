const { Router } = require(`express`),
    route = Router(),
    bot = require(`../../bot`).bot;


route.get(`/:id`, async (req, res) => {
    if (!req.isAuthenticated()) return res.redirect(`/dashboard`);

    const user = req.user,
        guild = bot.guilds.cache.get(req.params.id);

    if (!guild) return res.redirect(`/dashboard`);

    res.render(`guilds`, {
        user,
        bot,
        guild
    })
})

route.get(`/callback`, async (req, res) => {
    if (!req.isAuthenticated()) return res.redirect(`/dashboard`);

    const guildId = req.query.state;
    if (!guildId) return res.redirect(`/dashboard`);

    res.redirect(`/guilds/${guildId}`);
})

module.exports = route
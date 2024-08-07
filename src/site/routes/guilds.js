const { Router } = require(`express`),
    route = Router(),
    bot = require(`../../bot`).bot;

route.get(`/`, (req, res) => res.redirect(`/dashboard`));
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
    const guildId = req.query.state;

    res.redirect(`/guilds/${guildId}`);
})

module.exports = route
const { Router } = require(`express`),
  route = Router(),
  bot = require('../../bot/index').bot;

route.get(`/`, async (req, res) => {
  if (!req.isAuthenticated()) return res.redirect(`/auth/discord`)

  const user = req.user,
    guilds = [],
    guild = await bot.guilds.fetch(x => {
      const member = x.members.cache.get(user.id)
      if (member) {
        const perm = member.permissions.has('MANAGE_GUILD'),
          own = x.ownerId === user.id;
        
          if (perm || own) {
            guilds.push(x);
          }
      }
    });

    console.log(guilds)

  res.render(`dashboard`, {
    bot,
    user
  })
});

module.exports = route;
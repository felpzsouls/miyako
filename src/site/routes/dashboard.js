const { Router } = require(`express`),
  route = Router(),
  bot = require('../../bot/index').bot;

route.get(`/`, async (req, res) => {
  if (!req.isAuthenticated()) return res.redirect(`/auth/discord`)

  const user = req.user;

  res.render(`dashboard`, {
    bot,
    user
  })
});

module.exports = route;
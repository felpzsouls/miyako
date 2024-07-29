const { Router } = require(`express`),
  route = Router(),
  bot = require('../../bot/index').bot;

route.get(`/`, async (req, res) => {
  const user = req.user;

  res.render('index', {
    bot,
    user
  });
});

module.exports = route;
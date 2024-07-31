const { Router } = require('express');
const route = Router();
const bot = require('../../bot/index').bot;

route.get('/', async (req, res) => {
  if (!req.isAuthenticated()) return res.redirect('/auth/discord');

  try {
    const a = await bot.guilds.fetch();
    console.log(a);

    const user = req.user;
    const userGuilds = user.guilds.filter(guild => guild.owner || (guild.permissions & 0x00000020));
    const serverCheck = userGuilds.map(async (guild) => {
      const inServer = bot.guilds.cache.has(guild.id);
      const link = inServer 
        ? `/guilds/${guild.id}`
        : `https://discord.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot+applications.commands&permissions=8&guild_id=${guild.id}`;
      const text = inServer ? "Configurações" : "Me adicione";

      return `
        <div class="col">
          <div class="d-flex align-items-center">
            <img src="${guild.icon ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.${guild.icon.startsWith('a_') ? "gif" : "png"}` : 'https://loritta.website/assets/img/unknown.png'}" class="img-thumbnail rounded-circle border border-info border-2 bg-dark" width="55" height="55"/>
            <h3 class="text-center ml-2 text-truncate-custom">${guild.name}</h3>
          </div>
          <a class="btn btn-outline-info mt-2" role="button" href="${link}">${text}</a>
        </div>
      `;
    });

    const servers = await Promise.all(serverCheck);

    res.render('dashboard', {
      user,
      bot,
      servers
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = route;

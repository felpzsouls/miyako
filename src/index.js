require(`dotenv`).config();

require(`./site/app`).port(80);
require(`./bot/index`).login(process.env.token);
require(`dotenv`).config();
const mongoose = require('mongoose');
mongoose.connect(process.env.mongoUrl);

require(`./site/app`).port(80);
require(`./bot/index`).login(process.env.token);
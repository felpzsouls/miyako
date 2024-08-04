const { Router } = require(`express`),
    route = Router();

route.get(`/callback`, async (req, res) => {
    const guildId = req.query.state;
    const code = req.query.code;

    // prossiga com a lógica de autorização usando o guildId e o code
    res.send(`guild id: ${guildId}, code: ${code}`);
})

module.exports = route
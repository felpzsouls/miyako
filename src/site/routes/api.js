const { Router } = require('express');
const route = Router();
const guildSchema = require('../../models/guild');

route.post('/update-guild-data', async (req, res) => {
  const { guildId, prefix, restricted, blockedChannels } = req.body;

  try {
    let guild = await guildSchema.findOne({ id: guildId });
    if (!guild) {
      guild = new guildSchema({
        id: guildId
      });
    }

    console.log(blockedChannels)
    
    await guildSchema.updateOne(
      { 'id': guildId },
      {
        $set: {
          prefix,
          'restricted.active': restricted,
          'restricted.channels': blockedChannels
        }
      },
      { upsert: true }
    );
    res.json({ message: 'Dados da guild atualizados com sucesso.' });
  } catch (error) {
    console.error('Erro ao atualizar os dados da guild:', error);
    res.status(500).json({ message: 'Erro ao atualizar os dados da guild.', error: error.message });
  }
});

module.exports = route;
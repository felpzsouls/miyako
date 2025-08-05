const mongoose = require(`mongoose`),
    Schema = new mongoose.Schema({
        id: { type: Number, required: true },
        prefix: { type: String, default: `-`},
        restricted: {
            active: {type: Boolean, default: false},
            channels: {type: [String], default: []},
            message : { type: String, default: 'Você não pode usar comandos nesse canal!' }
        }
    });

guild = mongoose.model('guild', Schema);

module.exports = guild;
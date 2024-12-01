const mongoose = require(`mongoose`),
    Schema = new mongoose.Schema({
        id: { type: Number },
        prefix: { type: String, default: `-`}
    });

guild = mongoose.model('guild', Schema);

module.exports = guild;
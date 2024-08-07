const mongoose = require(`mongoose`),
    Schema = new mongoose.Schema({
        id: String,
        prefix: { type: String, default: `-`}
    });

guild = mongoose.model('guild', Schema);

module.exports = guild;
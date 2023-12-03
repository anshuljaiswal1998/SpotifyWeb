const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    track: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Song', SongSchema)
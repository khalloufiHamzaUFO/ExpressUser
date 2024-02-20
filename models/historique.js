const mongoose = require('mongoose');

const historiqueSchema = new mongoose.Schema({
    deviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Device',
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
});

const Historique = mongoose.model('Historique', historiqueSchema);

module.exports = Historique;

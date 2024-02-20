const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    deviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Device', required: true }, 
    type: { type: String, required: true },
    value: { type: Number, required: true }, 
    timestamp: { type: Date, default: Date.now } 
});


const Data = mongoose.model('Data', dataSchema);

module.exports = Data;

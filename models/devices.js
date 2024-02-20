const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    reference: { type: String, required: true, unique: true },
    name: { type: String, required: true},
    type: { type: String, required: true },
    statuts: { type: String, required: true },
    energyConsumption: { type: Number, required: true }, 

});

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;

const mongoose = require('mongoose');

const { Schema } = mongoose;

const SensorDevice = new Schema({
    units: String,
    type: String,
    payload: String
});

module.exports = mongoose.model('SensorDevice', SensorDeviceSchema);
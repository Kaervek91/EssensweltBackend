const mongoose = require('mongoose');

const { Schema } = mongoose;

const MQTTDeviceSchema = new Schema({
    type: String,
    description: String,
    value: Number
});

module.exports = mongoose.model('MQTTDevice', MQTTDeviceSchema);
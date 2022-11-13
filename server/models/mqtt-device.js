const mongoose = require('mongoose');

const { Schema } = mongoose;

const DeviceSchema = new Schema({
    type: String,
    description: String,
    value: Number
});

module.exports = mongoose.model('Device', DeviceSchema);
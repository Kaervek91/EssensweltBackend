const mongoose = require('mongoose');

const { Schema } = mongoose;

const deviceModelSchema = new Schema({
    units: String,
    type: String,
    payload: String
});

const deviceModel = mongoose.model('deviceModel', deviceModelSchema);



module.exports = deviceModelSchema;
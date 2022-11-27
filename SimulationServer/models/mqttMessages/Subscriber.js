/* Subscriber Model */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const SubscriberMsgSchema = new Schema({
    topic: String,
    message: String,
    options: String
});

module.exports = mongoose.model('SubscriberMsg', SubscriberMsgSchema);
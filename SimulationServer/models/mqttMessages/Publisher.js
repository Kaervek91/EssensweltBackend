/* Publisher Model */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const PublishMsgSchema = new Schema({
    topic: String,
    message: Buffer,
    options: String
});

const PublishTopicModel = mongoose.model('PublishMsg', PublishMsgSchema);

module.exports = PublishTopicModel;
const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/essenswelt';

mongoose.connect(URI)
    .then(db => console.log('Connected to database'))
    .catch(err => console.error(err));
    

module.exports = mongoose;
const mongoose = require('mongoose');
const dbgr = require('debug')('development:mongoose');
const config = require('config');

// Check if there is already a connection
if (mongoose.connection.readyState === 0) {
    mongoose.connect(`${config.get("MONGODB_URI")}/app`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => dbgr("connected"))
    .catch(err => console.log(err));
}

module.exports = mongoose.connection;

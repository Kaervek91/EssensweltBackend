const express = require("express");
/* Constructor */
const backendServer = express();

// Connection to DB
const { mongoose } = require('./api/database-connection-api.js');
const dbAPIRoutes = require('./api/database-api.js');
// Connection to MQTT
const { MQTTServer } = require('./api/mqtt-api.js');

// Settings
backendServer.set('port',process.env.PORT || 3000);

//Middleware

//Routes

//APIRoutes
backendServer.use('/db', dbAPIRoutes)

/* SERVERS LISTENERS */

backendServer.listen(backendServer.get('port'), () => {
  console.log("Backend Server is running on ", backendServer.get('port'));
});


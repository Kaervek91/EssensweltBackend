/* Constructor */
const ListOfTopics = require('./models/ListOfTopics.js');
// Connection to MQTT
const { client } = require('./api/mqtt-api.js');
// Scheduler start
const { schedule } = require('./api/jobScheduler');

// Settings
//backendServer.set('port',process.env.PORT || 3000);

//Middleware

//Routes

//APIRoutes
//backendServer.use('/db', dbAPIRoutes)

/* SERVERS LISTENERS */

/*backendServer.listen(backendServer.get('port'), () => {
  console.log("Backend Server is running on ", backendServer.get('port'));
});
*/
const mongoose = require('mongoose');
const { deviceModelSchema } = require('./devices/deviceModel'); // va en el payload.
const { PublishTopicModel } = require('./mqttMessages/Publisher');

const { Schema } = mongoose;

const ListOfTopics = {
   'Topic1' : {'topic': 'esp8266/bme280/temperature', 'message': {'units': 'Celsius', 'type': 'Temperature', 'payload': ''},'options':'', 'period' : '*/5 * * * * *'},
   'Topic2' : {'topic': 'esp8266/bme280/pressure', 'message': {'units': 'Pascals', 'type': 'Pressure', 'payload': ''},'options':'', 'period' : '*/5 * * * * *'},
   'Topic3' : {'topic': 'esp8266/bme280/humidity', 'message': {'units': '%', 'type': 'Humidity', 'payload': ''},'options':'', 'period' : '*/1 * * * * *'}
}

module.exports = ListOfTopics;

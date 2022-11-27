const schedule = require('node-schedule');
const ListOfTopics = require('../models/ListOfTopics');
const { publish, subscribe } = require('./mqtt-api');
const { getValue, locationLandau, OperationalVariables } = require('./open-weather-api');

stateMachine()

function EvaluateListOfTopics (List, OperationalVariables) {
    //Iterate over list
    //console.log(List);
    //console.log(OperationalVariables);
    Object.keys(List).forEach(function(key) {
        //console.log(key);
        List[key].message.payload = UpdateTopicValue(List,key,OperationalVariables);
        PublishTopic(List[key]);
      });
        
}

function UpdateTopicValue(List,key,OperationalVariables) {
    if (List[key].message.type == 'Temperature') {
        return List[key].message.payload = String(OperationalVariables['hourly']['temperature_2m']['value']);
    } else if (List[key].message.type == 'Pressure') {
        return List[key].message.payload = String(OperationalVariables['hourly']['surface_pressure']['value']);
    } else if (List[key].message.type == 'Humidity') {
        return List[key].message.payload = String(OperationalVariables['hourly']['relativehumidity_2m']['value']);
    } else {
        console.log("Error");
    }
}

function PublishTopic(Topic) {
    publish(Topic.topic,Topic.message.payload,Topic.options);
}

function stateMachine() {
    
    //For each topic from the list
    getValue(locationLandau,'ActualTemperature').then( (res) => {
        OperationalVariables.hourly.temperature_2m.date = res.date;
        OperationalVariables.hourly.temperature_2m.value = res.temperature;
    });
    getValue(locationLandau,'ActualPressure').then( (res) => {
        OperationalVariables.hourly.surface_pressure.date = res.date;
        OperationalVariables.hourly.surface_pressure.value = res.surface_pressure;
    });
    getValue(locationLandau,'ActualHumidity').then( (res) => {
        OperationalVariables.hourly.relativehumidity_2m.date = res.date;
        OperationalVariables.hourly.relativehumidity_2m.value = res.relativehumidity_2m;
    });
    //console.log(OperationalVariables);
    EvaluateListOfTopics(ListOfTopics,OperationalVariables);

}

schedule.scheduleJob("*/10 * * * * *", () => {stateMachine()});

module.exports = schedule;


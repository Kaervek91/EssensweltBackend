const MQTTClient = require('mqtt');

const options = {
  clientId:"simulationServer",
  //username:"steve",
  //password:"password",
  clean:true};

const client = MQTTClient.connect("mqtt://127.0.0.1",options);

client.on("connect", function() {
  console.log("Connected To Broker " + client.connected)
})

client.on("error", function(error) { 
  console.log("Can't connect "+error);
})


//publish
function publish(topic,msg,options){
  console.log("publishing", topic , msg , options);
  
  if (client.connected == true){
    
  client.publish(topic,msg,options);
  
  }
  /*count+=1;
  if (count==2) //ens script
    clearTimeout(timer_id); //stop timer
    client.end();	*/
}

//subscribe
function subscribe(topic,options){
  console.log("subscribing ",topic);
  
  if (client.connected == true){
    
  client.subscribe(topic,options);
  
  }
  /*count+=1;
  if (count==2) //ens script
    clearTimeout(timer_id); //stop timer
    client.end();	*/
}

module.exports = client;
module.exports = { publish, subscribe };
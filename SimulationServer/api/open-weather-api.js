/* To solve the got error "[ERR_REQUIRE_ESM]: require() of ES Module not supported", downgrade the version of the package to 11.8.3 by running the following command: npm install got@11.8.3. This is the last version of got that is built with CommonJS. */
const got = require('got');
const date = require("date-and-time");

const locationLandau = {
    latitude : '49.20',
    longitude : '8.12'
}

OperationalVariables = {
    'hourly': {
        'temperature_2m': { 'date': '' , 'value': 0 },
        'surface_pressure': { 'date': '' , 'value': 0 },
        'relativehumidity_2m': { 'date': '' , 'value': 0 }
    }
}

async function gotGetter(URL,options) {
    const res = await got.get(URL, options).then(res => {
        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
        //console.log('Status Code:', res.statusCode);
        //console.log('Date in Response header:', headerDate);
        return res['body'];
    }).catch(err => {
        console.log('Error: ', err.message);
    });
    return res;
}

// GetValue Location + Measure
async function getValue(location,measure) {
    Url = {
        host: 'https://api.open-meteo.com/v1/forecast?',
        latitude : '',
        longitude : '',
        measure: 'hourly=temperature_2m'
    }
    Url.latitude = location.latitude;
    Url.longitude = location.longitude;
    baseURL = Url.host+'latitude='+Url.latitude+'&longitude='+Url.longitude;
    //console.log(baseURL);
    if (measure == 'ActualTemperature') {
        return getActualTemperature(baseURL);
    } else if (measure == 'ActualPressure') {
        return getActualPressure(baseURL);
    } else if (measure == 'ActualHumidity') {
        return getActualHumidity(baseURL);
    }

}

// Temperature of the Last Hour - returns the last value of Temperature
const getActualTemperature = async (baseURL) => {
    // Url Builder
    now = new Date();
    formated = date.format(now,"YYYY-MM-DDTHH");
    formated += ":00";
    baseURL+='&hourly=temperature_2m';
    const json = await gotGetter(baseURL,{responseType: 'json'})
    
    //console.log(formated);
    index =-1
    var index = json['hourly']['time'].findIndex(
        function(item, i){
            //console.log(index)
            index+=1;
            //console.log(item);
        return item === formated
      });
    //console.log(json['hourly']['time']);
    //console.log(index);
    temperature_2m  = json['hourly']['temperature_2m'][index];
    return {'date': formated , 'temperature' : temperature_2m }
    
}

// Pressure of the Last Hour - return the last value of Humidity
const getActualPressure = async (baseURL) => {
    baseURL+='&hourly=surface_pressure';
    await gotGetter(baseURL,{responseType: 'json'})
    .catch ( (error)=> {console.log(error)})
    .then( (res) => {
        index = indexFinderBasedOnDate(res);
        surface_pressure  = res['hourly']['surface_pressure'][index];
    })
    return {'date': formated , 'surface_pressure' : surface_pressure }
}
// Humidity of the Last Hour - return the last value of Pressure
const getActualHumidity = async (baseURL) => {
    baseURL+='&hourly=relativehumidity_2m';
    await gotGetter(baseURL,{responseType: 'json'})
    .catch ( (error)=> {console.log(error)})
    .then( (res) => {
        index = indexFinderBasedOnDate(res);
        relativehumidity_2m  = res['hourly']['relativehumidity_2m'][index];
    })
    return {'date': formated , 'relativehumidity_2m' : relativehumidity_2m }
}

function indexFinderBasedOnDate(json) {
    now = new Date();
    formated = date.format(now,"YYYY-MM-DDTHH");
    formated += ":00";
    index =-1
    if (json != undefined ) {
        var index = json['hourly']['time'].findIndex(
        function(item, i){
            index+=1;
            return item === formated
        });
    }
    return index
}

module.exports = { getValue , locationLandau , OperationalVariables}
const request  = require('request')
const forecast = (longitude,latitude , callback) => {
   let  geoCode = latitude + "," + longitude
    const url = "https://api.darksky.net/forecast/2c9793589b3348604988a54114fd50e9/"+ geoCode

request({ url , json : true},(error,response) => {
    if(error){
        callback('Unable to connect to weather service',undefined)
     }else if(response.body.error){
         callback('Unable to find the location',undefined)
    }else{
        callback(undefined,{
            summary  : response.body.daily.data[0].summary,
            temperature  : response.body.currently.temperature,
            chance : response.body.currently.precipProbability
        })
     }
   
})
}

module.exports = forecast
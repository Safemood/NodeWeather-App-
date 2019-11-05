const request  = require('request')
const forecast = (latitude,longitude , callback) => {
   let  geoCode = latitude + "," + longitude
    const url = "https://api.darksky.net/forecast/2c9793589b3348604988a54114fd50e9/"+ geoCode

request({ url , json : true},(error,{body}) => {
    if(error){
        callback('Unable to connect to weather service',undefined)
     }else if( body.error){
         callback('Unable to find the location',undefined)
    }else{
        summary  =  body.daily.data[0].summary 
        const {temperature , precipProbability:chance} = body.currently
       
        callback(undefined,summary + ' it is currently ' + temperature +' degree. There is a ' + chance +'% chance of rain')
     }
   
})
}

module.exports = forecast
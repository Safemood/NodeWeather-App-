const request = require('request')
 
const url = "https://api.darksky.net/forecast/2c9793589b3348604988a54114fd50e9/37.8267,-122.4233"

request({ url , json : true},(error,response) => {
    if(error){
        console.log('Unable to connec to weather service')
    }else if(response.body.error){
        console.log('Unable to find the location')
    }else{
        console.log(response.body.daily.data[0].summary)
        console.log(response.body.currently.temperature)
         console.log(response.body.currently.precipProbability)
    }
   
})
 

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1IjoidGVzdGVyZmFzdGVyIiwiYSI6ImNrMml6amxnazEwZHgzY3Bjdnd6eWg4NTEifQ.YT_tpneC0veLDW2-U7cgWQ&limit=1"

request({ url : geocodeURL , json : true},(error,response) => {
    if(error){
        console.log('Unable to connec to location service')
    }else if(response.features.length){
        console.log('Unable to find the location')
    }else{
        const placeName = response.body.features[0].place_name 
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
         console.log(placeName , longitude ,latitude)
    }
  
   
})
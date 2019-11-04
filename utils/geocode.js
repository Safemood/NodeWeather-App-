const request  = require('request')

const geocode = (address,callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoidGVzdGVyZmFzdGVyIiwiYSI6ImNrMml6amxnazEwZHgzY3Bjdnd6eWg4NTEifQ.YT_tpneC0veLDW2-U7cgWQ&limit=1"

    request({  url , json : true},(error,response) => {
         if(error){
            callback('Unable to connect to location service',undefined)
         }else if(response.body.features.length === 0){
            callback('Unable to find to location. Try another',undefined) 
        }else{
            callback(undefined,{
                location :response.body.features[0].place_name ,
                 longitude : response.body.features[0].center[0],
                 latitude : response.body.features[0].center[1]
            })
            
         }
      
       
    })  
}

module.exports = geocode
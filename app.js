 const geocode = require('./utils/geocode')
 const forecast = require('./utils/forecast')

 const  address = process.argv[2] 
 if(!address){
     return console.log('Provide a location as an argument')
 }
geocode(address,(error,{location , latitude , longitude})=>{
    if(error){
        return console.log("Error: ",error)
    }
    
    forecast(latitude,longitude, (error,forcastData) => {
        if(error){
            return console.log("Error: ",error)
        }
        console.log("Data: ",location)
        console.log("Data: ",forcastData)

    })
})
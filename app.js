 const geocode = require('./utils/geocode')
 const forecast = require('./utils/forecast')

 
geocode(process.argv[2],(error,data)=>{
    console.log("Error: ",error)
    console.log("Data: ",data)
    forecast(data.longitude,data.latitude, (error,data) => {
        console.log("Error: ",error)
        console.log("Data: ",data)

    })
})
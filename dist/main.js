const weatherManager = new WeatherManager()
const renderer = new Renderer()


const loadPage = async () => {
    await getLocation()    
    await weatherManager.getDataFromDB()
    renderer.renderMainCity(weatherManager.mainCity)
    renderer.renderData(weatherManager.cityData)
}


const handleSearch = async cityName => {
    if(cityName.length > 0) {
            await weatherManager.getCityData(cityName)
            renderer.renderData(weatherManager.cityData)
    }
}

$('#search-icon').on('click', function() {
    handleSearch($('#input').val())
})

$('#input').keypress(event => {
    const keycode = (event.keyCode ? event.keyCode : event.which)
    if(keycode == '13'){
        handleSearch($('#input').val())
    }
    event.stopPropagation();
})

$('#results').on('click','.save', async function() {
    const cityName = $(this).closest('.city').data().name
    const cityIndex = weatherManager.cityData.findIndex(c => c.name === cityName)
    await weatherManager.saveCity(weatherManager.cityData[cityIndex], cityIndex)
    renderer.renderData(weatherManager.cityData)
})

$('#results').on('click','.delete', async function() {
    const cityName = $(this).closest('.city').data().name
    const cityIndex = weatherManager.cityData.findIndex(c => c.name === cityName)
    await weatherManager.removeCity(cityName, cityIndex)
    renderer.renderData(weatherManager.cityData)
})

 async function getLocation() {
    if(navigator.geolocation) {
       const options = {timeout:30000}
       const position = await locationPromise(options)
       await weatherManager.getLocationData(position)
       console.log(position);
       
    } else {
       console.log("browser does not support geolocation!")
    }
 }

 function locationPromise(options) {
     const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(function(position) {
            const location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            resolve(location)
        }, function(err) {
            let errMessage;
            if(err.code == 1) {
                errMessage = "geolocation Error: Access is denied!"
             } else if( err.code == 2) {
                errMessage = "geolocation Error: Position is unavailable!"
             }
            reject(errMessage)
        }, options)
     })
     return promise;
 }

loadPage()
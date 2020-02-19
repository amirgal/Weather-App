const weatherManager = new WeatherManager()
const renderer = new Renderer()
const locationManager = new LocationManager()
const imageGen = new ImageGen()


const loadPage = async () => {  
    const location = await locationManager.getLocation()
    await weatherManager.getLocationData(location)
    await weatherManager.getDataFromDB()
    $('body').css('background-image',imageGen.getConditionImage(weatherManager.mainCity.description))
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
    $('input').val('')
})

$('#input').keypress(event => {
    const keycode = (event.keyCode ? event.keyCode : event.which)
    if(keycode == '13'){
        handleSearch($('#input').val())
        $('input').val('')
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

loadPage()
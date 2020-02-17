const weatherManager = new WeatherManager()
const renderer = new Renderer()

const loadPage = async () => {
    await weatherManager.getDataFromDB()
    renderer.renderData(weatherManager.cityData)
}
loadPage()

const handleSearch = async cityName => {
    await weatherManager.getCityData(cityName)
    renderer.renderData(weatherManager.cityData)
}

$('#search-icon').on('click', function() {
    handleSearch($('#input').val())
})

$('#results').on('click','.save', async function() {
    const cityName = $(this).closest('.city').data().name
    const cityIndex = weatherManager.cityData.findIndex(c => c.name === cityName)
    weatherManager.updateCityStatus(cityIndex)
    await weatherManager.saveCity(weatherManager.cityData[cityIndex])
    renderer.renderData(weatherManager.cityData)
})

$('#results').on('click','.delete', async function() {
    const cityName = $(this).closest('.city').data().name
    await weatherManager.removeCity(cityName)

})
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



class WeatherManager {
    constructor() {
        this.cityData =[]
    }

    async getDataFromDB() {
        const cities = await $.get('/cities')

        cities.forEach(city => {
            city.saved = true
            this.cityData.unshift(city)})
    }

    async getCityData(cityName) {
        const city = await $.get(`/city/${cityName}`)
        if(!this.cityData.some(c => c.name === cityName)){
            city.saved = false
            this.cityData.unshift(city)
        }
    }

    async saveCity(city) {
        await $.post('/city', city)
        console.log(`saved ${city.name}`)
    }

    async removeCity(cityName) {
        await $.ajax({
            url:`/city/${cityName}`,
            type: 'DELETE',
        })
        console.log(`deleted ${cityName}`)
    }

    updateCityStatus(cityIndex) {
        this.cityData[cityIndex].saved = !this.cityData[cityIndex].saved
    }

}

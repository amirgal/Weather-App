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

    async saveCity(city, cityIndex) {
        await $.post('/city', city)
        this.cityData[cityIndex].saved = true
        console.log(`saved ${city.name}`)
    }

    async removeCity(cityName, cityIndex) {
        await $.ajax({
            url:`/city/${cityName}`,
            type: 'DELETE',
        })
        this.cityData.splice(cityIndex,1)
        console.log(`deleted ${cityName}`)
    }

}

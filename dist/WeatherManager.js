class WeatherManager {
    constructor() {
        this.cityData =[]
    }

    async getDataFromDB() {
        const cities = await $.get('/cities')
        cities.forEach(city => this.cityData.push(city))
    }

    async getCityData(cityName) {
        const city = await $get(`/city/${cityName}`)
        this.cityData.push(city)
    }

    async saveCity(city) {
        await $.post('/city', city)
        console.log(`saved ${city.cityName}`)
    }

    async removeCity(cityName) {
        await $.ajax({
            url:`/city/${cityName}`,
            type: 'DELETE',
        })
        console.log(`deleted ${cityName}`)
        
    }

}
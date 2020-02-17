class WeatherManager {
    constructor() {
        this.cityData =[]
    }

    async getDataFromDB() {
        const cities = await $.get('/cities')

        cities.forEach(city => {
            city.icon = "fas fa-minus-circle"
            this.cityData.push(city)})
    }

    async getCityData(cityName) {
        const city = await $.get(`/city/${cityName}`)
        if(!this.cityData.some(c => c.name === cityName)){
            city.icon = "fas fa-plus-circle"
            this.cityData.unshift(city)
        }
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

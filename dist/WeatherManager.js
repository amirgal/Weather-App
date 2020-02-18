class WeatherManager {
    constructor() {
        this.cityData =[]
        this.userCity = {}
    }

    async getDataFromDB() {
        const cities = await $.get('/cities')

        cities.forEach(city => {
            city.saved = true
            this.cityData.unshift(city)})
    }

    async getCityData(location) {
        if(typeof location == "object") {
            const userCity = await $.get(`/city/?lat=${location.lat}&lng=${location.lng}`)
            // this.userCity = userCity
            this.cityData.unshift(userCity)
            return
        }
        const city = await $.get(`/city/?cityName=${location}`)
        if(!this.cityData.some(c => c.name === city.name)){
            city.saved = false
            this.cityData.unshift(city)
        }
    }

    async saveCity(city, cityIndex) {
        await $.post('/city', city)
        this.cityData[cityIndex].saved = true
    }

    async removeCity(cityName, cityIndex) {
        await $.ajax({
            url:`/city/${cityName}`,
            type: 'DELETE',
        })
        this.cityData.splice(cityIndex,1)
    }

}

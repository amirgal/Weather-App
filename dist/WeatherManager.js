class WeatherManager {
    constructor() {
        this.cityData =[]
        this.mainCity = {}
    }

    async getDataFromDB() {
        const cities = await $.get('/cities')

        cities.forEach(city => {
            city.saved = true
            this.cityData.unshift(city)})
    }

    async getLocationData(location) {
        const mainCity = await $.get(`/city/?lat=${location.lat}&lng=${location.lng}`)
        this.mainCity = mainCity
        const date = new Date()
        this.mainCity.date = date.toLocaleDateString()
        this.mainCity.time = date.toLocaleTimeString()
    }

    async getCityData(location) {
        const city = await $.get(`/city/?cityName=${location}`)
        if (typeof city == 'string') {
            console.log(city);
        } else {
            if (!this.cityData.some(c => c.name === city.name)){
                city.saved = false
                this.cityData.unshift(city)
            }
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

    async updateCity(cityName, cityIndex) {
        const updatedCity = await $.get(`/city/?cityName=${cityName}`)
        await $.ajax({
            url:`/city/${cityName}`,
            type: 'PUT',
            data: updatedCity
        })
        updatedCity.saved = this.cityData[cityIndex].saved ? true : false
        this.cityData.splice(cityIndex, 1, updatedCity)
    }

}

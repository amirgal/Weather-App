const express = require('express')
const router = express.Router()
const axios = require('axios')
const City = require('../models/City')

const picUrl = ''
const api_key = 'f6814165c4f652c516ae54a25bab866b'

const fetchApi = async function(url) {
    const result = await axios.get(url)
    return result.data   
}

router.get('/city/:cityName', async (req,res) => {
    const {cityName} = req.params
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`
    let data = await fetchApi(url)
    data = {name: data.name, temperature: data.main.temp, condition: data.weather[0].description, conditionPic: picUrl}
    res.send(data)
})

router.get('/cities', async (req,res) => {
    const cities = await City.find({})
    res.send(cities)
})

router.delete('/city/:cityName', (req,res) => {
    const {cityName} = req.params
    City.findByIdAndDelete({name: cityName}).then(res.end())
})

router.post('/city', (req,res) => {
    const city = req.body
    const newCity = new City(city)
    newCity.save().then(res.end())
})




module.exports = router
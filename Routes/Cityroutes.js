const express = require('express');
const City = require('../Models/Citymodel');
const axios = require('axios');
const router = express.Router();

const fetchWeatherData = async (city) => {
  const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=${process.env.WEATHER_API_KEY}`);
  return response.data;
};

router.post('/', async (req, res) => {
  const { name } = req.body;
  const weatherData = await fetchWeatherData(name);
  const city = new City({ name, weatherData });
  await city.save();
  res.status(201).json(city);
});

router.get('/', async (req, res) => {
  const cities = await City.find();
  res.json(cities);
});

router.delete('/:id', async (req, res) => {
  await City.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;

const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({ 
     name: String,
    weatherData: {
      temperature: Number,
      condition: String,
      humidity: Number,
      windSpeed: Number,
      sunrise: Date,
      sunset: Date,
    },
});

module.exports = mongoose.model('City', CitySchema);

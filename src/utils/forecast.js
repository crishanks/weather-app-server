const request = require('request')

const forecast = (lat, long, cb) => {
  const url = `https://api.darksky.net/forecast/5ea6789990c966cb5445fdba4e2497ae/${lat},${long}?units=us`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      cb('Unable to connect to weather service!')
    } else if (body.error) {
      cb('Unable to find location!')
    } else {
      cb(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`)
    }
  })
}

module.exports = forecast
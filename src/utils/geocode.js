const request = require('request')

const geocode = (address, cb) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiY3Jpc2NvZGVzIiwiYSI6ImNqem01MDc0NzEyZTczYms2c3ZxN3VidGMifQ.UtAZQMh9gJfMWdJjSnn4eA`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      cb('Unable to connect to location services!')
    } else if (body.features.length === 0) {
      cb('Unable to find location. Try another search.')
    } else {
      cb(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  }) 
}

module.exports = geocode
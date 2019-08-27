const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setu phandlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Set up static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Cris'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Cris'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    helpText: 'Helpful text!',
    title: 'Help',
    name: 'Cris'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forcast: 'Snowing',
    location: 'Utah',
    name: 'Cris'
  })
})

// 404s
app.get('/help/*', (req, res) => {
  res.render( '404', {
    errorMessage: 'Help article not found',
    name: 'Cris',
    title: '404'
  }) 
})

// 404 Page -- non-matching routes
app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Cris',
    errorMessage: 'Page not found'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
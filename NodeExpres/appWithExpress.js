const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(morgan('combined'))

app.use(function (req, res, next) {
  console.log('Time', Date.now())
  next()
})

app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.get('/', (req, res) => {
  res.send('currentDate')
})

app.get('/user/:id', function (req, res, next) {
    console.log('ID:', req.params.id)
    next()
  }, function (req, res, next) {
    res.send('User Info')
  })
  
  // handler for the /user/:id path, which prints the user ID
  app.get('/user/:id', function (req, res, next) {
    res.end(req.params.id)
})

app.listen(8080, 'localhost')

const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(morgan('combined'))

app.get('/ping', (req, res) => {
  res.send('pong')
})
app.listen(8080, 'localhost')

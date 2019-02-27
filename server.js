const http = require('http')

const hostname = 'localhost'

const port = 6060

const server = http.createServer((req, res) => {
  res.statusCode = 200
//   res.setHeader('Content-type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

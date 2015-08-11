// Start program13 process

// require http node module
var http = require('http')

// require url node module
var url = require('url')

function parsetime (time) {
  return { hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds() }
}

function unixtime (time) { return { unixtime : time.getTime() } }

http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)

  // Get new date object from url's query iso parameter
  var time = new Date(parsedUrl.query.iso)

  var result

  // Use RegEx to determine GET request url
  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time, res)
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time, res)

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    return res.end(JSON.stringify(result))
  }

  // Otherwise write 404
  res.writeHead(404)
  
  res.end()
}).listen(process.argv[2])

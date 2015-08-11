// Start program12 process

// Get the http module for Node
var http = require('http')

// Get the stream module for Node
var stream = require('stream')

http.createServer(function(req, res) {
   if(req["method"] != "POST")
      return res.end("Server responds to POST requests only.");

   // 'OK' HTTP code
   res.writeHead(200, {'content-type': 'text/plain'})

   var body = ''
   req.on('data', function (data) {
     body += data
   })
   .on('end', function () {
     res.end(body.toString().toUpperCase())
  });
  
}).listen(process.argv[2]);

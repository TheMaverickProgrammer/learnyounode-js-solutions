// Start program12 process

// Get the http module for Node
var http = require('http');

// Get the file stream module for node
var fs = require('fs');

var fileToRead = process.argv[3];
var port = process.argv[2];

var server = http.createServer(function (req, res) {
    // 'OK' HTTP code
    res.writeHead(200, {'content-type': 'text/plain'})

    var fsStream = fs.createReadStream(fileToRead);
    fsStream.pipe(res);
}).listen(port);

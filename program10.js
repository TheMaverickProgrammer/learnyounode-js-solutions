// Start program10 process

// Get the network module for Node
var net = require('net')

// Unix format time module
var ft = require('strftime');

function now() {
   var date = new Date();
   var str  = ft('%F %k:%M', date);
   return str + '\n';
}

// Create a server
var server = net.createServer(function (socket) {
   socket.end(now());
})

// Listen
server.listen(process.argv[2]); // Port number is 1st argument in process

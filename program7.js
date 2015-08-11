// Start of program7 process

var http = require('http'); // http module
var url  = process.argv[2]; // Second argument is the url

http.get(url, function(response){
   response.setEncoding('utf8'); // Turn buffer objs from response into String
   response.on("data", console.log);
   response.on("error", console.error);
})

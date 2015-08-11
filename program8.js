// Start of program8 process

var http = require('http'); // http module
var bl   = require('bl');   // buffer list module
var url  = process.argv[2]; // first argument is the url

http.get(url, function(response){
   response.setEncoding('utf8'); // Turn buffer objs from response into String
   response.pipe(bl(function(err, data){
      if(err)
         return console.error(err);

      console.log(data.toString().length);
      console.log(data.toString()) }));
})

// Start of program9 process

var http = require('http'); // http module
var bl   = require('bl');   // buffer list module

// after second argument are the 3 urls
var url  = [process.argv[2],process.argv[3],process.argv[4]];

// return coutn
var count = 0;

// sync output
var out = [];

function httpGet(index) {
   http.get(url[index], function(response){

      response.setEncoding('utf8'); // Turn buffer objs from response into String
      response.pipe(bl(function(err, data){
         if(err)
         return console.error(err);

         out[index] = data.toString();
         count++;

         print();
      }));
   })
}

function print() {
   if(count == 3){
      out.forEach(function(string){
         console.log(string);
      })
   }
}

for(var i = 0; i < 3; i++){
   httpGet(i);
}

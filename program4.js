// Start of program4 process
var fs = require('fs');

// Asyncronously read and send the buffer object of a file whose path
// is set int 2nd argument of the process to the callback function.
fs.readFile(process.argv[2], function (err, data) {
   if(!err){
      var buffer = data;
      var numOfNewLines = buffer.toString().split('\n').length-1;

      console.log(numOfNewLines);
   }
});

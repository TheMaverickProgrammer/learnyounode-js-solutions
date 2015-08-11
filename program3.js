// Start of program3 process
var fs = require('fs');

// Read and return the buffer object of a file whose path
// is set int 2nd argument of the process.
var buffer = fs.readFileSync(process.argv[2]);

var numOfNewLines = buffer.toString().split('\n').length-1;
console.log(numOfNewLines);

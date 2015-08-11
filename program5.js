// Start of program5 process
var fs   = require('fs');
var path = require('path');

// process.argv[2] is path/to/dir
// process.argv[3] is file extention to filter by [NOTE: does not have '.']

var pathToDir = path.normalize(process.argv[2]);
var ext       = process.argv[3];

fs.readdir(pathToDir, function(err, list) {
   list.forEach(function (file) {
      if (path.extname(file) === '.' + ext)
         console.log(file);
   });
});

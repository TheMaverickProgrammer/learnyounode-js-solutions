var dd = require('./dirdisplay');

// process.argv[2] is path/to/dir
// process.argv[3] is file extention to filter by [NOTE: does not have '.']

var pathToDir = process.argv[2];
var ext       = process.argv[3];

dd(pathToDir, ext, function(err, data) {
   if(err)
      consoloe.error("There was an error: ", err);

   data.forEach(function(file) {
      console.log(file);
   })
});

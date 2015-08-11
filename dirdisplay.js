// Start of the dirdisplay module for Node.js

module.exports = function(pathToDir, extName, callback) {
   // Start of program6 process
   var fs   = require('fs');
   var path = require('path');

   fs.readdir(pathToDir, function(err, list) {
      if(err)
         return callback(err); // keyword return is necessary to terminate

      var data = [];

      list.forEach(function (file) {
         if (path.extname(file) === '.' + extName)
            data.push(file);
      });

      callback(null, data);
   });
}

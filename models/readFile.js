exports.read = function (callback) {
  const fs = require('fs');
  fs.readFile('../data.json', 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    } else {
      callback(data);
    }
  });
};

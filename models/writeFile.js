exports.write = function (data) {
  const fs = require('fs');
  fs.writeFile('../data.json', data, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('data has been saved');
    }
  });
};

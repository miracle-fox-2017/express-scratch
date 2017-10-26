const fs = require('fs');

class Model {
  static readData(cb) {
    fs.readFile('./data.json', 'utf8', (err, data) => {
      if (err) throw err;
      cb(JSON.parse(data));
    });
  }

  static writeData(body, cb) {
    fs.readFile('./data.json', 'utf8', (err, data) => {
      if (err) throw err;
      const appData = JSON.parse(data);

      if (body.email !== undefined) {
        const lastUserData = appData.users[appData.users.length - 1];
        body.id = lastUserData.id + 1;
        appData.users.push(body);
      } else if (body.name !== undefined) {
        const lastCityData = appData.cities[appData.cities.length - 1];
        body.id = lastCityData.id + 1;
        appData.cities.push(body);
      }

      fs.writeFile('./data.json', JSON.stringify(appData, undefined, 2), err => {
        if (err) throw err;
        cb();
      });
    });
  }

  static editUserData(params, cb) {
    fs.readFile('./data.json', 'utf8', (err, data) => {
      if (err) throw err;
      data = JSON.parse(data);

      for (let value in data.users) {
        if (data.users[value].id === +params) {
          cb(data.users[value]);
        }
      }
    });
  }

  static editUser(body, cb) {
    fs.readFile('./data.json', 'utf8', (err, data) => {
      if (err) throw err;
      data = JSON.parse(data);

      for (let value in data.users) {
        if (data.users[value].id === +body.id) {
          data.users[value] = body;
        }
      }

      fs.writeFile('./data.json', JSON.stringify(data, undefined, 2), err => {
        if (err) throw err;
        cb();
      });
    });
  }

  static editCityData(params, cb) {
    fs.readFile('./data.json', 'utf8', (err, data) => {
      if (err) throw err;
      data = JSON.parse(data);

      for (let value in data.cities) {
        if (data.cities[value].id === +params) {
          cb(data.cities[value]);
        }
      }
    });
  }

  static editUser(body, cb) {
    fs.readFile('./data.json', 'utf8', (err, data) => {
      if (err) throw err;
      data = JSON.parse(data);

      for (let value in data.cities) {
        if (data.cities[value].id === +body.id) {
          data.cities[value] = body;
        }
      }

      fs.writeFile('./data.json', JSON.stringify(data, undefined, 2), err => {
        if (err) throw err;
        cb();
      });
    });
  }
}

module.exports = Model;
let obj = {
  users: [{
    username: 'hacktiv8',
    password: 'hacktiv8',
    email: 'hactiv8@hacktiv8.com'
  }, {
    username: 'johndoe',
    password: '12345',
    email: 'john@doe.com'
  }],
  cities: [{
    name: 'Jakarta',
    province: 'DKI Jakarta'
  }, {
    name: 'Bandung',
    province: 'Jawa Barat'
  }]
}

console.log(JSON.stringify(obj));

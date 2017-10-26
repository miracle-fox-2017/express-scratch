const File = require('./readfile')

class User {
  static addUser(dataInput) {
    File.readFile(dataJSON => {
      // console.log(dataJSON.users[0].id);
      let obj = {
        id: dataJSON.users[dataJSON.users.length-1].id + 1,
        username: dataInput.username,
        password: dataInput.password,
        email: dataInput.email
      }
      // let a = JSON.stringify(obj)
      console.log(obj);
      // console.log(dataJSON);
      dataJSON.users.push(obj)
      // console.log(dataJSON);
      let newData = JSON.stringify(dataJSON)
      // console.log(newData);
      File.writeFile(newData)
    })
  }
}
// let file = new File('../data.json')
// User.addUser()

module.exports = User;

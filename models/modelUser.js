const fs = require('fs')

class ModelUser {
    constructor() {
        this.dataUser
        this.dataUserById
    }
    readData(callback) {
        fs.readFile('models/data.json', 'utf-8', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                this.dataUser = JSON.parse(data)
                callback()
            }
        })

    }
    getDataUser() {
        return this.dataUser
    }
    saveDataUser(newData) {
        this.readData((data) => {
            let user = this.dataUser[0].users
            let userId = user[user.length - 1].id + 1
            let obj = {
                id: userId,
                username: newData.username,
                password: newData.password,
                email: newData.email
            }
            this.dataUser[0].users.push(obj)
            // console.log(this.dataUser)
            fs.writeFile('models/data.json', JSON.stringify(this.dataUser), (err) => {
                //console.log(this.dataUser)
            })

        })

    }


    getDatabyId(id) {
        let user = this.dataUser[0].users
        for (let i = 0; i < user.length; i++) {
            if (user[i].id == id) {
                return user[i]
            }
        }
    }
    saveDataById(userId, newData) {
        this.readData(() => {
            let user = this.dataUser[0].users
            for (let i = 0; i < user.length; i++) {
                if (user[i].id == userId) {
                    user[i].username = newData.username
                    user[i].password = newData.password
                    user[i].email = newData.email
                }
            }
            // this.dataUser[0].users.push(obj)

            fs.writeFile('models/data.json', JSON.stringify(this.dataUser), (err) => {
                //console.log(this.dataUser)
            })
        })


    }

    deleteData(id) {
        this.readData(() => {
            let user = this.dataUser[0].users
            for (let i = 0; i < user.length; i++) {
                if (user[i].id == id) {
                    user.splice(i, 1)
                }
            }
            fs.writeFile('models/data.json', JSON.stringify(this.dataUser), (err) => {
                //console.log(this.dataUser)
            })
        })
    }
}

module.exports = ModelUser
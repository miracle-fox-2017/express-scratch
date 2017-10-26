const fs = require('fs')

class ModelCity {

    constructor() {
        this.dataCity;
    }
    readData(callback) {
        fs.readFile('models/data.json', 'utf-8', ((err, data) => {
            if (err) {
                console.log(err)
            } else {
                this.dataCity = JSON.parse(data)
                callback()
            }
        }))
    }
    getDataCity() {
        return this.dataCity
    }
    saveDataCity(newData) {
        this.readData((data) => {
            let city = this.dataCity[0].cities
            let cityId = city[city.length - 1].id + 1
            let obj = {
                id: cityId,
                name: newData.name,
                province: newData.province
            }
            this.dataCity[0].cities.push(obj)
            console.log(this.dataCity)
            fs.writeFile('models/data.json', JSON.stringify(this.dataCity), (err) => {
                console.log(this.dataCity)
            })

        })

    }

    getDatabyId(id) {
        let city = this.dataCity[0].cities
        for (let i = 0; i < city.length; i++) {
            if (city[i].id == id) {
                return city[i]
            }
        }
    }
    saveDataById(cityId, newData) {
        this.readData(() => {
            let city = this.dataCity[0].cities
            for (let i = 0; i < city.length; i++) {
                if (city[i].id == cityId) {
                    city[i].name = newData.name
                    city[i].province = newData.province

                }
            }
            // this.dataUser[0].users.push(obj)

            fs.writeFile('models/data.json', JSON.stringify(this.dataCity), (err) => {
                //console.log(this.dataUser)
            })
        })


    }
    deleteData(id) {
        this.readData(() => {
            let city = this.dataCity[0].cities
            for (let i = 0; i < city.length; i++) {
                if (city[i].id == id) {
                    city.splice(i, 1)
                }
            }
            fs.writeFile('models/data.json', JSON.stringify(this.dataCity), (err) => {
                //console.log(this.dataUser)
            })
        })
    }
}

module.exports = ModelCity
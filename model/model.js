const fs = require("fs");

class Model{
    constructor(file){
        this.file = file;
    }
    ambilData(){
        return JSON.parse(fs.readFileSync(this.file));
    }
    saveData(obj) {
        let setData = this.ambilData();
        setData.users.push(obj);
        fs.writeFileSync(this.file, JSON.stringify(setData));
    }
}

module.exports = Model;
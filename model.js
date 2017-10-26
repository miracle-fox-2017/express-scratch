const fs=require("fs");

class Model{
    constructor(filename){
        this.filename=filename;
        this.data=null;
    }
    bacaFile(callback){
        fs.readFile(this.filename,'utf-8',(err,data)=>{
            if(err){
                throw err;
            }else{
                callback(JSON.parse(data));
            }
        });
    }
}

module.exports=Model;

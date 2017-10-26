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
                callback(data);
            }
        });
    }
    tulisFile(data){
        const array=[data];
        const stringify=JSON.stringify(array);
        fs.writeFile(this.filename,stringify,(err)=>{
            if(err){
                throw err;
            }
        });
    }
}

module.exports=Model;

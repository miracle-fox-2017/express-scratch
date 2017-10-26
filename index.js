const express=require("express");
const parser=require("body-parser");
const Model=require("./model");
const model=new Model("data.json");
const app=express();

// Body Parser
app.use(parser.urlencoded({extended:false}));
app.use(parser.json());
// EJS
app.set("views","./public");
app.set("view engine","ejs");

//=================================> Release 0 Manual Object
// const obj={
//     users:[{
//       username:"hacktiv8",
//       password:"hacktiv8",
//       email:"hactiv8@hacktiv8.com"
//     },{
//       username:"johndoe",
//       password:"12345",
//       email:"john@doe.com"
//     }],
//     cities:[{
//       name:"Jakarta",
//       province:"DKI Jakarta"
//     },{
//       name:"Bandung",
//       province:"Jawa Barat"
//     }]
// }

//=================================> Release 1 Get Data from JSON File
// Routing
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/users",(req,res)=>{
    model.bacaFile((data)=>{
        res.render("user",data[0]);
    });
});
app.get("/cities",(req,res)=>{
    model.bacaFile((data)=>{
        res.render("city",data[0]);
    });
});

// Set Listen Port
app.listen(8080,()=>{
    console.log("Listening on port 8080");
});

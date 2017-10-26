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
// Home Page / Landing Page
app.get("/",(req,res)=>{
    res.render("index");
});

// Users
app.get("/users",(req,res)=>{
    model.bacaFile((data)=>{
        const jsonParse=JSON.parse(data);
        res.render("user",jsonParse[0]);
    });
});
app.get("/users/add",(req,res)=>{
    res.render("create");
});
app.post("/create",(req,res)=>{
    model.bacaFile((data)=>{
        let parsing=JSON.parse(data)[0];
        const user={username:req.body.username,password:req.body.password,email:req.body.email};
        const city={name:req.body.city,province:req.body.province};
        parsing.users.push(user);
        parsing.cities.push(city);
        model.tulisFile(JSON.stringify(parsing));
    });
    res.render("index");
});

// Cities
app.get("/cities",(req,res)=>{
    model.bacaFile((data)=>{
        const jsonParse=JSON.parse(data);
        res.render("city",jsonParse[0]);
    });
});

// Set Listen Port
app.listen(8080,()=>{
    console.log("Listening on port 8080");
});

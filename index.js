const express=require("express");
const parser=require("body-parser");
const app=express();

// Body Parser
app.use(parser.urlencoded({extended:false}));
app.use(parser.json());
// EJS
app.set("views","./public");
app.set("view engine","ejs");

//=================================> Release 0 Manual Object
const obj={
    users:[{
      username:"hacktiv8",
      password:"hacktiv8",
      email:"hactiv8@hacktiv8.com"
    },{
      username:"johndoe",
      password:"12345",
      email:"john@doe.com"
    }],
    cities:[{
      name:"Jakarta",
      province:"DKI Jakarta"
    },{
      name:"Bandung",
      province:"Jawa Barat"
    }]
}

// Routing
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/users",(req,res)=>{
    res.render("user",obj);
});
app.get("/cities",(req,res)=>{
    res.render("city",obj);
});

// Set Listen Port
app.listen(8080,()=>{
    console.log("Listening on port 8080");
});

var express = require("express");

var app = express();
//espera reciber por get
app.set("view engine", "jade");

app.get("/",function(req,res){
   res.render("index");
});

app.listen(8080);
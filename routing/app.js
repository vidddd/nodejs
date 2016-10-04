var express = require("express");

var app = express();
//espera reciber por get
app.set("view engine", "pug");


app.get("/",function(req,res){
   res.render("index");
});

// variable nombre
app.get("/:nombre",function(req,res){
   // pasamos variables a las vistas
   res.render("form", {nombre: req.param.nombre});
});

app.listen(8080);
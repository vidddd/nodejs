var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.set('view engine', 'pug');
var User = require("./models/user").User;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res){
    res.render("index");
});


app.post("/users", function(req,res){
    var user = new User({email: req.body.email, password: req.body.password});
    
    user.save(function(){
       res.send("Guardamos tus datos de login"); 
    });
    User.find(function(err,doc){
        console.log(doc);
    });
});
// se ejecuta de manera asincrona,y la function callback se queda a la de acabar 
/*
user.save(function(){
    console.log("Guardamos tus datos");
});

User.find(function(err,doc){
    console.log(doc);
}); */

app.listen(8080);
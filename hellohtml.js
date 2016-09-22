var http = require("http"), fs =  require("fs");

//la funcion se ejecuyta despues del archivo y ya no retorna nada
fs.readFile("./index.html", function(error,html){
  // es asincrono, el servidor puede hacer otras cosas mientras esta leyendo este archivo
  // no estamos seguros de ucando se va a ejecutar
  http.createServer(function(req,res){
  res.write(html); 
  res.end();
}).listen(8080);
});
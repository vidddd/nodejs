var http = require("http"), fs =  require("fs"), 
        parser = require("./param_parse.js"); // Trae todo como un objeto

var p =parser.parse; // Cojo la funcion del modulos param_parse

http.createServer(function(req,res){
    fs.readFile("./public/index.html", function(err,html){
      // hechamos un vistazo al objeto de la respuesta
      // imprime dos veces porque son dos peticiones una del favicon y otra de la pagina en si 
     //console.log(req);
     if (req.url.indexOf("favicon.ico") > 0 ) { console.log("favicon"); return; }
     var html_string = html.toString();
     if(req.url.indexOf("?") > 0){
         // /?nombre=david
         var url_data = req.url.split("?");
         
     }
     var parametros = p(req);
      console.log(parametros[5]);
     
       res.writeHead(200,{
            'Content-Length': Buffer.byteLength(html),
            'Content-Type': 'text/html' });
        res.write(html);
        res.end();
    }); 
}).listen(8080);
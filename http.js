var http = require("http"), fs =  require("fs");

http.createServer(function(req,res){
    fs.readFile("./index.html", function(error,html){
       res.writeHead(200,{
            'Content-Length': Buffer.byteLength(html),
            'Content-Type': 'text/plain' });
        res.write(html);
        res.end();
    }); 
}).listen(8080);
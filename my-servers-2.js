var http = require("http");
var fs = require("fs");
// var url = require("url");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
   fs.readFile("index.html", function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html"});
    res.end(data);
   })
}

server.listen(PORT, function(){
    console.log("server running")
})

/*
function displayRoot(url, req, res) {
    var html = `
    <html><body><h1>Home Page</h1><a href='/portfolio'>portfolio</a></body></html>
    `

    
    res.end(html);
}

function displayPortfolio(url, req, res) {
    
}

function displayRoot(url, req, res) {
    
}
*/
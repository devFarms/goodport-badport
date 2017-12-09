var http = require("http");

var GOOD_PORT = 7000;
var BAD_PORT = 7500;

function handleGood(req, resp){
    resp.end("Good." + req.url);
};

function handleBad(req, resp){
    resp.end("Bad." + req.url);
};

var serverGood = http.createServer(handleGood);
var serverBad = http.createServer(handleBad);

serverGood.listen(GOOD_PORT, function(){
    console.log("listening on: http://localhost:" + GOOD_PORT);
});

serverBad.listen(BAD_PORT, function(){
    console.log("listening on: http://localhost:" + BAD_PORT);
});
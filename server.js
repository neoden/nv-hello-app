#!/usr/bin/env node

const PORT = 8888

var http = require('http');
var rq = require('request');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    rq('https://ifconfig.co/ip', function(error, rsp, body) {
        response.end(body);
    })
});

server.listen(PORT);

console.log('Running on http://localhost:' + PORT);
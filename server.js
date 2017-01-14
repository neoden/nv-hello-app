#!/usr/bin/env node

const PORT = 8888

var http = require('http');
var externalip = require('externalip');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    externalip(function (err, ip) {
        response.end(ip);
    });
});

server.listen(PORT);

console.log('Running on http://localhost:' + PORT);
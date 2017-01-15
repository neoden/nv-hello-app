#!/usr/bin/env node

const PORT = 8888

var http = require('http');
var getIP = require('external-ip');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    getIP(function (err, ip) {
        if (err) {
            throw err;
        }
        response.end(ip);
    });
});

server.listen(PORT);

console.log('Running on http://localhost:' + PORT);
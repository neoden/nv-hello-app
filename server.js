#!/usr/bin/env node

const PORT = 8888

var http = require('http');
var os = require('os');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});

    var interfaces = os.networkInterfaces();
    var addresses = [];
    for (var k in interfaces) {
        for (var k2 in interfaces[k]) {
            var address = interfaces[k][k2];
            if (address.family === 'IPv4' && !address.internal) {
                addresses.push(address.address);
            }
        }
    }

    response.end(addresses.join());
});

server.listen(PORT);

console.log('Running on http://localhost:' + PORT);
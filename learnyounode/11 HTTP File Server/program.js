'use strict';

var fs   = require('fs');
var http = require('http');

var filePath = process.argv[3];

http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/plain'});
    fs.createReadStream(filePath).pipe(res);
}).listen(process.argv[2]);
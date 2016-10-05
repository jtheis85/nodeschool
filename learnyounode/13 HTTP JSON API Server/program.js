'use strict';

var http = require('http');
var url  = require('url');

http.createServer(function(req, res) {
    var parsedUrl = url.parse(req.url, true);
    var responseObject = {};
    var date = new Date(parsedUrl.query.iso);
    if(parsedUrl.pathname === '/api/parsetime') {
        responseObject = {
            hour:   date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        console.log(responseObject);
    } else if (parsedUrl.pathname === '/api/unixtime') {
        responseObject = {
            unixtime: date.getTime()
        };
    }
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.write(JSON.stringify(responseObject));
    res.end();
}).listen(process.argv[2]);
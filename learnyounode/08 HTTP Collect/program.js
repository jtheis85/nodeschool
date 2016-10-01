'use strict';

var http = require('http');
var concat = require('concat-stream');

var url = process.argv[2];

http.get(url, function(response) {
    response.pipe(concat(function(data) {
        var result = data.toString();
        console.log(result.length);
        console.log(result);
    }));
});
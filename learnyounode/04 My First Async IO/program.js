'use strict';

var fs = require('fs');
var path = process.argv[2];

fs.readFile(path, 'utf8', function(err, data) {
    if(!err) {
        var count = data.split('\n').length - 1;
        console.log(count);
    }
});
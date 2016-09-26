'use strict';

var fs   = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dirPath, function(err, list) {
    if(err) return console.error(err);
    list.filter(function(file) {
        return path.extname(file) === ext;
    }).forEach(function(file) {
        console.log(file);
    });
});
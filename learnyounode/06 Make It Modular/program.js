'use strict';

var filterDirectory = require('./filterDirectory.js');

var dir = process.argv[2];
var ext = process.argv[3];

filterDirectory(dir, ext, function(err, list) {
    if(err) return console.error(err);

    list.forEach(function(item){
        console.log(item);
    });
});


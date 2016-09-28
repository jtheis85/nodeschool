'use strict';

var fs = require('fs');
var path = require ('path');

var filterDirectory = function(dir, ext, callback) {
    ext = '.' + ext;

    fs.readdir(dir, function(err,files) {
        if(err) return callback(err);

        var results = files.filter(function(file) {
            return path.extname(file) === ext;
        });

        callback(null, results);
    });
};

module.exports = filterDirectory;
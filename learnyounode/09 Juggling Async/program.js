'use strict';

var http = require('http');
var bl = require('bl');

var urls = [process.argv[2], process.argv[3], process.argv[4]];

var responseCount = 0;
var responses = [];
urls.forEach(function(url, index) {
    http.get(url, function(response) {
        response.pipe(bl(function(err,data) {
            if(err) {return;}
            responses[index] = data.toString(0);
            responseCount++;
            if(responseCount === urls.length) {
                print();
            }
        }));
    });
});

function print() {
    responses.forEach(function(response) {
        console.log(response);
    })
}
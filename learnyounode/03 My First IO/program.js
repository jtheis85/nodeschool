'use strict';

var fs =  require('fs');
var path = process.argv[2];

var result = fs.readFileSync(path).toString().split('\n').length - 1;

console.log(result);
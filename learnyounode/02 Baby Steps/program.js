'use strict';

var sumArgs = process.argv.splice(2);

if(sumArgs.length < 1) {
    console.log(0);
} else {
    console.log(sumArgs
        .map(function(arg) {
            return Number(arg);
        })
        .reduce(function(prev, curr) {
            return prev + curr;
        })
    );
}


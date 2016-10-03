'use strict';

var net = require('net');

net.createServer(function(socket) {
    var date = new Date();

    var YYYY = date.getFullYear();
    var M    = date.getMonth() + 1;
    var D    = date.getDate();
    var h    = date.getHours();
    var m    = date.getMinutes();

    var MM = M < 10 ? '0' + M : M;
    var DD = D < 10 ? '0' + D : D;
    var hh = h < 10 ? '0' + h : h;
    var mm = m < 10 ? '0' + m : m;

    var data = YYYY + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + '\n';

    socket.write(data);
    socket.end();
}).listen(process.argv[2]);
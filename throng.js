/**
 * Module Dependencies
 */

var server = require('./server');
var port = process.env.PORT || 7000;
var throng = require('throng');

/**
 * Throng
 */

throng(start, { lifetime: Infinity });

/**
 * Start
 */

function start() {
  server.listen(port, function() {
    var addr = this.address();
    console.log('listening on [%s]:%d', addr.address, addr.port);
  })
}

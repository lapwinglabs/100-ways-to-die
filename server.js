/**
 * Module Dependencies
 */

var roo = module.exports = require('roo')(__dirname);
var port = process.env.PORT || 7000;
var throng = require('throng');

/**
 * Die
 */

 roo.get('/uncaught/sync', function *(next) {
   throw new Error('sync error');
 });

 roo.get('/uncaught/async', function *(next) {
   console.log('handling!');
   process.nextTick(function() {
     throw new Error('async error');
   });
 });

 roo.get('/process/exit', function *(next) {
   process.exit();
 })

 roo.get('/', function *(next) {
   console.log('getting /');
   this.body = 'I\'m alive!';
 })

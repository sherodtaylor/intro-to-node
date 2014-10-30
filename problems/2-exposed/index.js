var fs = require('fs');
var path = require('path');
var verify = require('adventure-verify');

exports.name = 'Exposed';
exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.template = __dirname + '/template.txt';

exports.verify = verify({ modeReset: true }, function (args, t) {
  var f = require(path.resolve(args[0]));
  t.equal(typeof f, 'function', 'you exported a function');
  t.equals(f(2, 2), 4, '2 + 2 = 4');
  t.end();
});

var fs = require('fs');
var path = require('path');
var verify = require('adventure-verify');

exports.name = 'Exposed';
exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.end();
});

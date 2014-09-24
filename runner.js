#!/usr/bin/env node

var adventure = require('adventure');
var shop = adventure('Intro To Node');
var fs = require('fs');
var path = require('path');

fs.readdir(path.resolve(__dirname, 'problems'), function(err, files) {
  files.forEach(function(file) {
    var problem = require(path.resolve(__dirname, 'problems', file));

    shop.add(problem.name, function() { 
      return problem;
    });
  });

  shop.execute(process.argv.slice(2));
});


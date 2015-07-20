// Node path module
var path = require('path');

// Babel transpiler
var babel = require('broccoli-babel-transpiler');
// filter trees (subsets of files)
var funnel = require('broccoli-funnel');
// concatenate trees
var concat = require('broccoli-concat');
// merge trees
var mergeTrees = require('broccoli-merge-trees');

// Transpile the source files
var appJs = babel('src', {browserPolyfill: true});

// Concatenate all the JS files into a single file
appJs = concat(appJs, {
  inputFiles: ['**/*.js'],
  outputFile: '/js/my-app.js'
});

// Grab the index file
var index = funnel('src', {files: ['index.html']});

// Grab all our trees and
// export them as a single and final tree
module.exports = mergeTrees([index, appJs]);

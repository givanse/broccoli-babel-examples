// Babel transpiler
var babel = require('broccoli-babel-transpiler');
// filter trees (subsets of files)
var funnel = require('broccoli-funnel');
// concatenate trees
var concat = require('broccoli-concat');
// merge trees
var mergeTrees = require('broccoli-merge-trees');

// Transpile the source files
var appJs = babel('src');

// Grab the polyfill file provided by the Babel library
var babelPath = require.resolve('broccoli-babel-transpiler');
babelPath = babelPath.replace(/\/index.js$/, '');
babelPath += '/node_modules/babel-core';
var browserPolyfill = funnel(babelPath, {
  files: ['browser-polyfill.js']
});

// Add the Babel polyfill to the tree of transpiled files
appJs = mergeTrees([browserPolyfill, appJs]);

// Concatenate all the JS files into a single file
appJs = concat(appJs, {
  // we specify a concatenation order
  inputFiles: ['browser-polyfill.js', '**/*.js'],
  outputFile: '/js/my-app.js'
});

// Grab the index file
var index = funnel('src', {files: ['index.html']});

// Grab all our trees and
// export them as a single and final tree
module.exports = mergeTrees([index, appJs]);

var babel = require('broccoli-babel-transpiler'); // Babel transpiler
var funnel = require('broccoli-funnel'); // filter trees (subsets of files)
var concat = require('broccoli-concat'); // concatenate trees
var mergeTrees = require('broccoli-merge-trees'); // merge trees

// Transpile the source files
var appJs = babel('src');

// We'll be using ES6 generators and a Polyfill is needed
// Add the Babel polyfill to the set of transpiled files
var browserPolyfill = funnel('node_modules/broccoli-babel-transpiler/node_modules/babel-core',
                             { files: ['browser-polyfill.js'] });
appJs = mergeTrees([browserPolyfill, appJs]);

// Concatenate all the JS files into a single file
appJs = concat(appJs, {
  inputFiles: ['browser-polyfill.js', '**/*.js'], // the order matters
  outputFile: '/js/my-app.js'
});

// Grab the index file
var index = funnel('src', {files: ['index.html']});

// Grab all our trees and export them as a single and final tree
module.exports = mergeTrees([index, appJs]);

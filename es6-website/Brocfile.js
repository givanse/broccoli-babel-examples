var funnel = require('broccoli-funnel');
var babel = require('broccoli-babel-transpiler');
var concat = require('broccoli-concat');
var mergeTrees = require('broccoli-merge-trees');

// Transpile the source files
var appJs = babel('src');

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

// Export the final tree
module.exports = mergeTrees([index, appJs]);

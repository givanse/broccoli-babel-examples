// import babel plugin
var babel = require('broccoli-babel-transpiler');

// grab the source and transpile in 1 step
fruits = babel('src'); // src/*.js

module.exports = fruits;

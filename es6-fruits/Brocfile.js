// filters or builds Broccoli trees
var funnel = require('broccoli-funnel');
// our ES6 Transpiler
var babel = require('broccoli-babel-transpiler');

var fruits = funnel('src/', {files: ['fruits.js']}); // grab de file
fruits = babel(fruits); // transpile ES6 to ES5

module.exports = fruits;

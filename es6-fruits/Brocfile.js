var babel = require('broccoli-babel-transpiler');

fruits = babel('src'); // src/*.js

module.exports = fruits;

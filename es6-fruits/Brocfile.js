// import babel plugin
var babel = require('broccoli-babel-transpiler');

// grab the source and transpile in 1 step
fruits = babel('src', {
  presets: [
    ['env', {
      'targets': {
        'browsers': ["last 2 versions"]
      }
    }]
  ]
}); // src/*.js

module.exports = fruits;

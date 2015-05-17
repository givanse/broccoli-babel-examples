/*
  ES6 Generator

  In order to use Generators you must include the Babel polyfill. 
  https://babeljs.io/docs/learn-es6/#generators

  I can't really handle hex codes :p
*/
function* hexRange(start, stop, step) {
  for (var i = start; i < stop; i += step) {
    yield i;
  }
}

function printColors() {
  var content$ = $('#content');

  for ( var hex of hexRange(900, 999, 10) ) { // contrived example 
    var newDiv = $('<div>').attr('class', 'color')
                           .css({ 'background-color': `#${hex}` })
                           .append(`hex code: #${hex}`);
    content$.append(newDiv);
  }
}

$(printColors);

var greet = require('./greet1.js')
greet()

var greet2 = require('./greet2.js').greet
greet2()

var greet3 = require('./greet3')
greet3.greet()

greet3.greeting = 'Changed hello world!'
var greet3b = require('./greet3')
greet3b.greet()


var Greet4 = require('./greet4')
greet4 = new Greet4()
greet4.greet()

var greet5 = require('./greet5')
greet5.greet

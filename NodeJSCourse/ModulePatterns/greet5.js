/* 
Revealing Module Pattern:
    Exposing only the properties and methods you want via an returned object.
    -A very common and clean way to structure and protect code within modules.
*/

var greeting = 'Hello world!!!!'

function greet() {
    console.log(greeting)
}

module.exports = {
    greet: greet
}
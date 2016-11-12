function Person(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname)
}

var john = new Person('John','Doe')

console.log(john.firstname)


var patrick = new Person('Patrick','Gao')

patrick.greet()


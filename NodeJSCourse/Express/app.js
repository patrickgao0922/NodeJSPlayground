function Person(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
}

var john = new Person('John', 'Doe')

console.log(john.firstname)

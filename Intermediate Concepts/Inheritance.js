// Parent Class
class Person {

    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    describe() {
        console.log(`I am ${this.name} and I am ${this.age} years old.`)
    }
}

class Programmer extends Person {

    constructor (_name, _age, _yearsOfExperience) {
        // Needed to Invoke the Constructor in the Parent Class
        super(_name, _age);

        this.yearsOfExperience = _yearsOfExperience;
    }

    code() {
        console.log(`${this.name} is coding.`);
    }
}

let person1 = new Person("Jeff", 45);
let programmer1 = new Programmer("John", 28, 4);
person1.describe();
programmer1.describe();
programmer1.code();

function developSoftware (programmers) {

    // Developer Software
    for(let programmer of programmers) {
        programmer.code();
    }

}

const programmers = [
    new Programmer("Dom", 56, 12),
    new Programmer("Jeff", 24, 4)
];

developSoftware(programmers);
class Animal {

    // Constructor
    constructor (_name) {
        this.name = _name;
    }

    // Make Animal Sound
    makeSound() {
        console.log("Generic Animal Sound!!");
    }
}

class Dog extends Animal {

    // Constructor
    constructor (_name, _breed, _age) {
        super(_name);
        this.breed = _breed;
        this.age = _age;
    }

    // We are overriding the parent class method
    makeSound() {
        console.log("Woof! Woof!");
        super.makeSound();
    }
}

let dog1 = new Dog();
dog1.makeSound();
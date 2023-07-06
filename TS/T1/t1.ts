class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log("Animal makes a sound");
    }

    info() {
        return "Animal";
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    makeSound() {
        console.log("Dog barks");
    }

    info(): string {
        return super.info();
    }

}

class Cat extends Animal {

    constructor(name: string) {
        super(name);
    }
    
    makeSound() {
      console.log("Cat meows");
    } 

    info(): string {
        return super.info();
    }
}

const animal = new Animal("Animal");
const dog = new Dog("Bruno", "shih tzu");
const cat = new Cat("Felek");

animal.makeSound();
dog.makeSound();
cat.makeSound();

console.log(dog.info());
console.log(cat.info());
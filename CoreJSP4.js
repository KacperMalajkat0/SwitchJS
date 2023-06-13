const log = console.log;

// TASK 1
const person1 = {
    name: "Rick",
    age: 40,
    info(){
        console.log(`Name: ${this.name} \nAge: ${this.age}\n`);
    }
}
log("TASK 1:");
person1.info();

// TASK 2
const cat = function(name){
    this.name = name;
}

cat.prototype.meow = function(){
    console.log(`${this.name} says Meow!\n`);
}
log("TASK 2:");
let kitty = new cat("Dot");
kitty.meow();

// TASK 3
const Person = function(name, age){
    this.name = name;
    this.age = age;
    this.info = function(){
        console.log(`Name: ${this.name} \nAge: ${this.age}\n`);
    }
}

const Employee = function(name, age, salary){
    Person.call(this, name, age);
    this.salary = salary;
    this.fullInfo = function(){
        console.log(`Name: ${this.name} \nAge: ${this.age} \nSalary: ${this.salary}\n`);
    }
}

log("TASK 3:");
let p1 = new Person("Rick", 20);
p1.info();
let e1 = new Employee("Morty", 20, 10000);
e1.info();
e1.fullInfo();

// TASK 4
function greet(name, age) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.\n`);
}
  
const person = {
  name: 'John',
  age: 30
};

log("TASK 4:");  
greet.apply(person, ['John', 30]);

// TASK 5
const dog = {
    name: 'Loki',
    woof(){
        console.log(`${this.name} says Woof!\n`);
    }
};

const Bruno = {
    name: 'Bruno'
};

const brunoSaysWoof = dog.woof.bind(Bruno);

log("TASK 5:");
brunoSaysWoof();

// TASK 6
function Book(title, author) {
    this.title = title;
    this.author = author;
    this.info = function(){
        console.log(`${this.title}, ${this.author} \n`);
    }
}

const book = new Book("The Lord of the Rings", "J. R. R. Tolkien");

log("TASK 6:");
book.info();

// TASK 7
/*
In JavaScript, every object has a prototype, which is an object that serves as a template for the object. 
The prototype object contains properties and methods that are shared by all instances of the object. 
When a property or method is accessed on an object, JavaScript first looks for it on the object itself. 
If it is not found, it looks for it on the object's prototype. 
If it is still not found, it looks for it on the prototype's prototype, and so on, 
until it reaches the end of the prototype chain (null).

Inheritance is the process by which an object inherits properties and methods from another object. 
In JavaScript, inheritance is achieved by setting the prototype of one object to be another object. 
This creates a prototype chain, where the child object inherits properties and methods from the parent object.
*/

function Animal(name){
    this.name = name;
    this.speak = function(){
        console.log(`${this.name} make a noise \n`);
    }
}

function Snake(name){
    Animal.call(this, name);
    this.name = name;
}

Object.setPrototypeOf(Snake, Animal.prototype);

const s = new Snake('Dodo');
log("TASK 7:");
s.speak();

// TASK 8
class Rectangle{
    constructor(_width, _height){
        this.width = _width;
        this.height = _height;
    }

    static calculateArea(rectangle){
        return rectangle.height * rectangle.width;
    }
}

const rectangle = new Rectangle(5, 5);
const area = Rectangle.calculateArea(rectangle);
log("TASK 8:");
log(area);
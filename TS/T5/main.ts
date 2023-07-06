import { addNumbers, subtractNumbers, Person } from './myModule';

console.log(addNumbers(2, 3));
console.log(subtractNumbers(5, 2));

const person = new Person('John', 30);
person.sayHello();
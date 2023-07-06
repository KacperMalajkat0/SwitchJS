"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.subtractNumbers = exports.addNumbers = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports.addNumbers = addNumbers;
function subtractNumbers(a, b) {
    return a - b;
}
exports.subtractNumbers = subtractNumbers;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
exports.Person = Person;

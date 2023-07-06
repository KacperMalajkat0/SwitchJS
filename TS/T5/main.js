"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myModule_1 = require("./myModule");
console.log((0, myModule_1.addNumbers)(2, 3));
console.log((0, myModule_1.subtractNumbers)(5, 2));
var person = new myModule_1.Person('John', 30);
person.sayHello();

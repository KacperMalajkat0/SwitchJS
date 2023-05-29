const log = console.log;

// TASK 1
function addNumbers(num1, num2){
    return num1 + num2;
}

const result = addNumbers(10, 5);

log("TASK 1")
log(result + "\n");

// TASK 2
function isString(v){
    return typeof v === "string";
}

log("TASK 2")
log(isString("One"));
log(isString(1) + "\n");

// TASK 3￼
function isPrimitive(v){
    return typeof v !== 'object' && typeof v !== 'function' || v === null; 
}

const v1 = isPrimitive;

log("TASK 3")
log("1: " + isPrimitive(1));
log("d0_0b: " + isPrimitive("d0_0b"));
log("isPrimitive: " + isPrimitive(v1));
log("null: " + isPrimitive(null));
log("new String(d0_0b): " + isPrimitive(new String("d0_0b")) + "\n");

// TASK 4

/*

Hoisting is a JavaScript mechanism 
where variables and function declarations 
are moved to the top of their respective scopes during the compilation phase. 
This means that variables and functions can be used before they are declared.

*/

// example 1 (with 'var'):

log("TASK 4")
log(a);
var a = 1;

/*

In this case, the variable 'a' is declared using the var keyword and then assigned a value of 1. 
However, when we try to log the value of 'a' to the console before it's declared, we get 'undefined' instead of a 'ReferenceError'. 
This is because the declaration of 'a' is hoisted to the top of it's scope, but the assignment is not.

*/

// example 2 (with 'let'):

// log(b);
let b = 1;
log();
/*

In this case, we will get a 'ReferenceError' because the declaration of 'b' is not hoisted to the top of its scope. 
This is because 'let' and 'const' are in dead zone before the declaration.

*/

// TASK 5

/*

'var':

- Variables declared with 'var' are function-scoped, meaning they are accessible within the function they are declared in.
- If a variable is declared with 'var' outside of a function, it becomes a global variable and can be accessed from anywhere in the code.
- Variables declared with 'var' can be redeclared and reassigned.

*/

// exapmle:
log("TASK 5")

function fun1(){
    var x = 5;
    if (true) {
        var x = 10;
        log(x);
    }
    log(x);
}

fun1();
log();

/*

'let':

- Variables declared with 'let' are block-scoped, 
meaning they are only accessible within the block they are declared in (e.g. if statement, for loop, etc.).
- Variables declared with 'let' cannot be redeclared, but they can be reassigned.

*/

// example:

function fun2() {
    let x = 10;
    if (true) {
      let x = 20;
      log(x); 
    }
    log(x);
}

fun2();
log();

/*

'const':

- Variables declared with 'const' are block-scoped.
- Variables declared with 'const' cannot be redeclared or reassigned. 
Once a value is assigned to a 'const' variable, it cannot be changed.

*/

// example:

function fun3() {
    const x = 10;
    if (true) {
        //x = 20;
        const x = 20;
        log(x); 
    }
    log(x);
}

fun3();
log();

// TASK 6

function isObject(o){
    return typeof o === "object" && o !== null;
}

log("TASK 6")
log("string: " + isObject("string"));
log("1: " + isObject(1));
log("object: " + isObject(new Object()));
log("null: " + isObject(null));
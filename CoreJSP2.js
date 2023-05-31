const log = console.log;

// TASK 1

function sumOfEvenNumbers(nubers){

    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            sum += numbers[i];
        }
    }
    return sum;
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
log("TASK 1:");
log("2+4+6+8+10 = " + sumOfEvenNumbers(numbers));
log();

// TASK 2

function concatenateToStrings(s1, s2){
    return s1 + s2;
}

log("TASK 2:");
log(concatenateToStrings("Hello ", "World"));
log();

// TASK 3

function checkNumber(n){
    let r = "";
    switch(Math.sign(n)){
        case 1:
            r = "Positive";
            break;
        case n = 0:
            r = "Zero";
            break;
        case -1:
            r = "Negative";
            break;
        default:
            r = "n is NOT a number"
    }
    return r;
}

log("TASK 3:");
log("n = 1: " + checkNumber(1));
log("n = -1: " + checkNumber(-1));
log("n = 0: " + checkNumber(0));
log("n = Ala: " + checkNumber("Ala"));
log();

// TASK 4

function factorial(n){
    let r = 1;
    while(n>0){
        r *= n;
        n--;
    }
    return r;
}

log("TASK 4:");
log("factorial of 3 = " + factorial(3));
log("factorial of 6 = " + factorial(6));
log("factorial of 9 = " + factorial(9));
log();

// TASK 5

const person = {
    name: "Jan",
    age: 20,

    greet(){
        return `Hello, my name is ${this.name}.`;
    }
}

log("TASK 5:");
log(person.greet());
log();

// TASK 6

class Car{

    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo(){
        return `make: ${this.make}, \nmodel: ${this.model}, \nyear: ${this.year}`
    }

}

const tesla = new Car("Tesla", "X", 2023);
log("TASK 6:");
log(tesla.getInfo());
log();
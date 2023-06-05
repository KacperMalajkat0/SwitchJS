const log = console.log;

// TASK 1
function multiplyBy2(arr){
    let result = arr.map(e => e*2);
    return result;
}

log("TASK 1:");
log(multiplyBy2([1,2,3,4,5]));
log();

// TASK 2
function getLength(arr){
    return arr.length;
}

log("TASK 2:");
log(getLength([1,2,3,4,5]));
log();

// TASK 3
function sortArr(arr){
    return arr.sort();
}

log("TASK 3:");
log(sortArr(['zzz', 'ccc', 'aaa', 'bbb', 'yyy']));
log();

// TASK 4
function combine(arr1, arr2){
    const result = arr1.concat(arr2);
    return result;
}

log("TASK 4:");
log(combine(['a','b', 'c'], [1,2,3]));
log();

// TASK 5
const sum = (a, b) => a+b;

log("TASK 5:");
log(sum(2,3));
log();

// TASK 6
function sum2(...Args){
    if(Args.length === 0){
        return 0;
    }

    return Args.reduce((sum, element) => {
        sum += element;
        return sum;
    });
}

log("TASK 6:");
log(sum2(1,2,3,4,5));
log(sum2());
log();

// TASK 7
function showScope(){
    const private = 'private';
    public = 'public';
    return `${private} ${public}`;
}
/*
    I declared two variables in the function ('private', 'public').
    Because I used the keyword 'const' before 'private' then this variable is only available in function scope.
    Therefore, when someone tries to access this variable outside the function, the program throws 'ReferenceError'.
    However, when declaring the 'public' variable, I did not use any keyword, 
    which means that this variable has a global scope and everyone can access it from the outside.
*/
log("TASK 7:")
log(showScope());
// log(private);
log(public);
log();

// TASK 8
function outerFunction() {
    const outerVariable = "outer variable";

    function innerFunction() {
        console.log(outerVariable);
    }
  
    return innerFunction;
}

const innerFunc = outerFunction();

log("TASK 8:");
innerFunc();
log();

// TASK 9
function factorial(n, memo={}){
    if (n in memo) return memo[n];
    if (n === 0) return 1;

    memo[n] = factorial(n-1) * n;
    return memo[n];
}

log("TASK 9:");
log("factorial(10) = "+factorial(10));
log("factorial(13) = "+factorial(13));
log();
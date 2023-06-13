const log = console.log;
// TASK 1

/*
Synchronous code execution means that the code is executed in a sequential order, 
one line at a time. The next line of code cannot be executed until the previous line has finished executing. 
This means that the program will wait for each line of code to finish executing before moving on to the next line.
*/
log("TASK 1:")
log("line1")
log("line2")

/*
Asynchronous code execution means that the code is executed in a non-sequential order. 
The program will not wait for each line of code to finish executing before moving on to the next line. 
Instead, the program will continue to execute other lines of code while waiting for certain operations to complete.
*/

setTimeout(log, 0, "line3", "\n")
log("line4")
log()

// Task 2

function logT(msg){
    log(msg)
    clearTimeout(t)
}

let t = setTimeout(logT, 500, "TASK 2\n", ":P")

// TASK 3

let i = setInterval(() => {
    log(":D")
}, 500)

setTimeout(() => {
    clearInterval(i)
    log("Interval cleared")
}, 2000)

// TASK 4

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10)
        if (randomNumber % 2 === 0) {
            resolve(`Success! The random number is ${randomNumber}.`)
        } else {
            reject(`Error! The random number is ${randomNumber}.`)
        }
    }, 2000)
})
  
myPromise
    .then((result) => {
        log(result)
    })
    .catch((error) => {
        console.error(error)
});

// TASK 5

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchData() {
    console.log('Fetching data...')
    await delay(2000)
    console.log('Data fetched!')
    return { name: 'John', age: 30 }
}

(async function processData() {
    console.log('Processing data...')
    const data = await fetchData()
    console.log(`Data processed: ${data.name} is ${data.age} years old.`)
})()

// TASK 6

class ValidationError extends Error {
    constructor(message) {
      super(message)
      this.name = 'ValidationError'
    }
}

function validateInput(input){
    if(typeof input === 'string') 
        throw new ValidationError('Input cannot be string!!!')
}

try {
    validateInput("1")
} catch (e) {
    console.error(e.message)
}

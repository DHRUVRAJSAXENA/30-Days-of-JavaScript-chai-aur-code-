// Day 1: Variables and Data Types

// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var numberVar = 30
console.log("Task 1 - var numberVar:", numberVar)

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let stringLet = "Hello, World!"
console.log("Task 2 - let stringLet:", stringLet)

// Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const booleanConst = true
console.log("Task 3 - const booleanConst:", booleanConst)

// Activity 3: Data Types

// Task 4: Create variables of different data types and log each variable's type using the typeof operator.
let num = 100 // number
let str = "JavaScript" // string
let bool = false // boolean
let obj = { name: "John", age: 30 } // object
let arr = [1, 2, 3, 4, 5] // array

console.log("Task 4 - typeof num:", typeof num) // number
console.log("Task 4 - typeof str:", typeof str) // string
console.log("Task 4 - typeof bool:", typeof bool) // boolean
console.log("Task 4 - typeof obj:", typeof obj) // object
console.log("Task 4 - typeof arr:", typeof arr) // object (arrays are a type of object in JavaScript)

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let reassignVar = "Initial Value"
console.log("Task 5 - Before reassignment:", reassignVar)

reassignVar = "New Value"
console.log("Task 5 - After reassignment:", reassignVar)

// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.
const reassignConst = 10
console.log("Task 6 - Before reassignment:", reassignConst)

reassignConst = 20 // TypeError: Assignment to constant variable.
console.log("Task 6 - After reassignment:", reassignConst) // This line will not be executed due to the error

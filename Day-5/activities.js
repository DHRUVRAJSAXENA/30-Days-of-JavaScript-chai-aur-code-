// Day 5: Functions

// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log("Task 1 - The number is even.")
  } else {
    console.log("Task 1 - The number is odd.")
  }
}
checkEvenOdd(7)

// Task 2: Write a function to calculate the square of a number and return the result.
function calculateSquare(num) {
  return num * num
}
console.log("Task 2 - The square of the number is:", calculateSquare(4))

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function (a, b) {
  return a > b ? a : b
}
console.log("Task 3 - The maximum of the two numbers is:", findMax(10, 20))

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateStrings = function (str1, str2) {
  return str1 + " " + str2
}
console.log(
  "Task 4 - The concatenated string is:",
  concatenateStrings("Hello", "World")
)

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a, b) => a + b
console.log("Task 5 - The sum of the two numbers is:", sum(5, 10))

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsCharacter = (str, char) => str.includes(char)
console.log(
  "Task 6 - The string contains the character:",
  containsCharacter("JavaScript", "J")
)

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
  return a * b
}
console.log("Task 7 - The product of the numbers is:", multiply(5, 3))
console.log(
  "Task 7 - The product of the number with default parameter is:",
  multiply(5)
)

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = 30) {
  return `Hello, my name is ${name} and I am ${age} years old.`
}
console.log("Task 8 - Greeting message:", greet("Dhruv"))
console.log("Task 8 - Greeting message with age:", greet("Dhruv", 21))

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(func, times) {
  for (let i = 0; i < times; i++) {
    func()
  }
}
repeatFunction(
  () => console.log("Task 9 - This is a repeated function call."),
  3
)

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(func1, func2, value) {
  return func2(func1(value))
}
const addTwo = (num) => num + 2
const square = (num) => num * num
console.log(
  "Task 10 - The result of applying the functions is:",
  applyFunctions(addTwo, square, 3)
)

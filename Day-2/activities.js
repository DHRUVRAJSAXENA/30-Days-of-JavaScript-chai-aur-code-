// Day 2: Operators

// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.
let num1 = 10
let num2 = 5
let sum = num1 + num2
console.log("Task 1 - Sum:", sum) // Output: 15

// Task 2: Write a program to subtract two numbers and log the result to the console.
let difference = num1 - num2
console.log("Task 2 - Difference:", difference) // Output: 5

// Task 3: Write a program to multiply two numbers and log the result to the console.
let product = num1 * num2
console.log("Task 3 - Product:", product) // Output: 50

// Task 4: Write a program to divide two numbers and log the result to the console.
let quotient = num1 / num2
console.log("Task 4 - Quotient:", quotient) // Output: 2

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let remainder = num1 % num2
console.log("Task 5 - Remainder:", remainder) // Output: 0

// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let assignNum = 10
assignNum += 5
console.log("Task 6 - Using += operator:", assignNum) // Output: 15

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
assignNum -= 3
console.log("Task 7 - Using -= operator:", assignNum) // Output: 12

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let comparison1 = num1 > num2
let comparison2 = num1 < num2
console.log("Task 8 - Using >:", comparison1) // Output: true
console.log("Task 8 - Using <:", comparison2) // Output: false

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
let comparison3 = num1 >= num2
let comparison4 = num1 <= num2
console.log("Task 9 - Using >=:", comparison3) // Output: true
console.log("Task 9 - Using <=:", comparison4) // Output: false

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let comparison5 = num1 == num2
let comparison6 = num1 === num2
console.log("Task 10 - Using ==:", comparison5) // Output: false
console.log("Task 10 - Using ===:", comparison6) // Output: false

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let logicalAnd = num1 > 0 && num2 > 0
console.log("Task 11 - Using &&:", logicalAnd) // Output: true

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
let logicalOr = num1 < 0 || num2 > 0
console.log("Task 12 - Using ||:", logicalOr) // Output: true

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
let logicalNot = !(num1 < 0)
console.log("Task 13 - Using !:", logicalNot) // Output: true

// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let numberToCheck = -10
let result = numberToCheck >= 0 ? "Positive" : "Negative"
console.log("Task 14 - Using ternary operator:", result) // Output: Negative

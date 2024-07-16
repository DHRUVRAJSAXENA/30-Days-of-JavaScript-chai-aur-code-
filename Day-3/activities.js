// Day 3: Control Structures

// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let number = -5
if (number > 0) {
  console.log("Task 1 - The number is positive.")
} else if (number < 0) {
  console.log("Task 1 - The number is negative.")
} else {
  console.log("Task 1 - The number is zero.")
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 20
if (age >= 18) {
  console.log("Task 2 - The person is eligible to vote.")
} else {
  console.log("Task 2 - The person is not eligible to vote.")
}

// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 10
let num2 = 20
let num3 = 30

if (num1 >= num2 && num1 >= num3) {
  console.log("Task 3 - The largest number is:", num1)
} else if (num2 >= num1 && num2 >= num3) {
  console.log("Task 3 - The largest number is:", num2)
} else {
  console.log("Task 3 - The largest number is:", num3)
}

// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let dayNumber = 4
switch (dayNumber) {
  case 1:
    console.log("Task 4 - It's Sunday.")
    break
  case 2:
    console.log("Task 4 - It's Monday.")
    break
  case 3:
    console.log("Task 4 - It's Tuesday.")
    break
  case 4:
    console.log("Task 4 - It's Wednesday.")
    break
  case 5:
    console.log("Task 4 - It's Thursday.")
    break
  case 6:
    console.log("Task 4 - It's Friday.")
    break
  case 7:
    console.log("Task 4 - It's Saturday.")
    break
  default:
    console.log("Task 4 - Invalid day number.")
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'F) based on a score and log the grade to the console.
let score = 85
let grade
switch (true) {
  case score >= 90:
    grade = "A"
    break
  case score >= 80:
    grade = "B"
    break
  case score >= 70:
    grade = "C"
    break
  default:
    grade = "F"
}
console.log("Task 5 - The grade is:", grade)

// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let num = 7
let result = num % 2 === 0 ? "Even" : "Odd"
console.log("Task 6 - The number is:", result)

// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions and log the result to the console.
let year = 2020
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
console.log("Task 7 - The year", year, "is a leap year:", isLeapYear)

// Day 4: Loops

// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
console.log("Task 1 - Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
console.log("Task 2 - Multiplication table of 5:");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let num = 1;
while (num <= 10) {
    sum += num;
    num++;
}
console.log("Task 3 - Sum of numbers from 1 to 10:", sum);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
console.log("Task 4 - Numbers from 10 to 1:");
num = 10;
while (num >= 1) {
    console.log(num);
    num--;
}

// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
console.log("Task 5 - Numbers from 1 to 5:");
num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let factorial = 1;
num = 5; // You can change this number to calculate the factorial of a different number
let i = 1;
do {
    factorial *= i;
    i++;
} while (i <= num);
console.log(`Task 6 - Factorial of ${num}:`, factorial);

// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops:
// *
// **
// ***
// ****
// *****
console.log("Task 7 - Pattern:");
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}

// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
console.log("Task 8 - Numbers from 1 to 10, skipping 5:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
console.log("Task 9 - Numbers from 1 to 10, stopping at 7:");
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

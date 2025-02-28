// Day 7: Objects

// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008,
}
console.log("Task 1 - Book object:", book)

// Task 2: Access and log the title and author properties of the book object.
console.log("Task 2 - Book title:", book.title)
console.log("Task 2 - Book author:", book.author)

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getDetails = function () {
  return `${this.title} by ${this.author}`
}
console.log("Task 3 - Book details:", book.getDetails())

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function (newYear) {
  this.year = newYear
}
book.updateYear(2021)
console.log("Task 4 - Updated book object:", book)

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
  name: "City Library",
  books: [
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      year: 2008,
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      year: 2011,
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      year: 2015,
    },
  ],
}
console.log("Task 5 - Library object:", library)

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("Task 6 - Library name:", library.name)
library.books.forEach((book, index) => {
  console.log(`Task 6 - Book ${index + 1} title:`, book.title)
})

// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getTitleAndYear = function () {
  return `${this.title} (${this.year})`
}
console.log("Task 7 - Book title and year:", book.getTitleAndYear())

// Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
console.log("Task 8 - Iterating over book properties:")
for (let key in book) {
  if (book.hasOwnProperty(key)) {
    console.log(`${key}: ${book[key]}`)
  }
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log("Task 9 - Book keys:", Object.keys(book))
console.log("Task 9 - Book values:", Object.values(book))

let name = "dhruv"
let age = 21

let info = `hi i am ${name} and my age is ${age}`

console.log(info)

const multiLine = `hello,
i am ${name}
and my age is ${age}
`
console.log(multiLine)

const arr = [1, 2, 3, 4, 5, 6]

const [first, second] = arr

console.log(first, second)

const book = {
  title: "title1",
  author: "dhruv",
}

const { title, author } = book

console.log(title, author)

const arr1 = [...arr, 7, 8, 9]

console.log(arr1, ".............")

function sum(...args) {
  let ans = args.reduce((acc, curr) => acc + curr, 0)
  console.log(ans)
}

sum(...arr)

function product(a, b = 1) {
  return a * b
}

let ans1 = product(3)
console.log(ans1)
let ans2 = product(3, 5)
console.log(ans2)

const User = {
  name: "dhruv",
  age: 20,

  userDetails() {
    console.log(`user name is ${name} and age is ${age}`)
  },
}

User.userDetails()

let property1 = "firstName"
let property2 = "LastName"

const User1 = {
  [property1]: "Dhruv raj",
  [property2]: "Saxena",

  greet() {
    console.log(`hello ${this[property1]} ${this[property2]}`)
  },
}

User1.greet()

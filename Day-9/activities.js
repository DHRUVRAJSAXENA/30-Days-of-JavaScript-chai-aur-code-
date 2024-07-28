const username = document.getElementById("username")

username.textContent = "Saxena"

const content = document.querySelector(".user")

// content.style.backgroundColor = "red"

const newDiv = document.createElement("div")

newDiv.textContent = "this is a new div"

document.body.appendChild(newDiv)

const newLi = document.createElement("li")
newLi.textContent = "li 3"
const list = document.getElementById("list")
list.appendChild(newLi)

const firstEle = document.querySelector("#list li:first-child")
firstEle.remove()

const lastEle = list.lastElementChild
lastEle.remove()

const Image = document.getElementById("changeImage")
Image.src =
  "https://i.pinimg.com/236x/1d/2b/c8/1d2bc8101216bc2d86ed2a572d3df244.jpg"

content.classList.add("highlight1")
content.classList.remove("highlight1")

const button = document.getElementById("clickButton")

button.addEventListener("click", () => {
  const para = document.getElementById("para")
  para.textContent = "para content changed"
})

button.addEventListener("mouseover", () => {
  button.style.borderColor = "red"
})
button.addEventListener("mouseleave", () => {
  button.style.borderColor = ""
})

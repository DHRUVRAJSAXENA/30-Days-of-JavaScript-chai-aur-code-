const message = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is a message")
  }, 2000)
})

message.then((data) => {
  console.log(data)
})

const rejectMessage = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("message is rejected")
  }, 2000)
})

rejectMessage.catch((data) => {
  console.log(data)
})

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched")
    }, 1000)
  })
}

const processData = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${data} and processed succesfully`)
    }, 1000)
  })
}

fetchData()
  .then((data) => {
    console.log(data)
    return processData(data)
  })
  .then((fetchedData) => {
    console.log(fetchData)
  })

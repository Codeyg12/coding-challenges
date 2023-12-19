// Challenge 4: Async/Await and API Requests
// Create an application that uses async/await to make multiple API requests in parallel and aggregate the results. For example, fetch data from two different endpoints and combine the data into a single response.
let rColor = Math.floor(Math.random() * 255)
let gColor = Math.floor(Math.random() * 255)
let bColor = Math.floor(Math.random() * 255)
let randomUser = Math.floor(Math.random() * 10)
const fetchURL = `https://jsonplaceholder.typicode.com/users/${randomUser}`;
const colorURL = `https://www.thecolorapi.com/id?rgb=rgb(${rColor},${gColor},${bColor})`

fetch(colorURL)
.then(res => res.json())
.then(h => console.log(h))
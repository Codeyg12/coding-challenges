// Challenge 4: Async/Await and API Requests
// Create an application that uses async/await to make multiple API requests in parallel and aggregate the results. For example, fetch data from two different endpoints and combine the data into a single response.
let rColor = Math.floor(Math.random() * 255)
let gColor = Math.floor(Math.random() * 255)
let bColor = Math.floor(Math.random() * 255)
let randomUser = Math.ceil(Math.random() * 10)
const fetchURL = `https://jsonplaceholder.typicode.com/users/${randomUser}`;
const colorURL = `https://www.thecolorapi.com/id?rgb=rgb(${rColor},${gColor},${bColor})`

const multiEndpoints = async () => {
    try {
        const firstData = await fetch(fetchURL)
    const user = await firstData.json()
    const { name, address: {city}, company: {name: companyName} } = user
    const secondData = await fetch(colorURL)
    const color = await secondData.json()
    const { name: {value: colorName }} = color
    console.log(`Hello, my name is ${name} and I work at ${companyName} located in ${city}. My favorite color is ${colorName}.`);
    } catch (err) {
        console.error(err.message);
    }
}

multiEndpoints()
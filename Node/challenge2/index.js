// Challenge 2: Promisify a Callback Function
// Take a common callback-based function, such as fs.readFile, and promisify it. Create a function that returns a Promise-based version of the callback function.
const fs = require('fs')
const { promisify } = require('util')

const inputFile = 'text.txt'
const outputFile = 'output.txt'

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

const promiseFile = async () => {
    try {
        let data = await readFileAsync(inputFile, 'utf-8')
        await writeFileAsync(outputFile, data, 'utf-8')
        console.log('success');
    } catch (err) {
        console.error(err);
    }
}

promiseFile()
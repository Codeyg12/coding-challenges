// Challenge 2: Promisify a Callback Function
// Take a common callback-based function, such as fs.readFile, and promisify it. Create a function that returns a Promise-based version of the callback function.
const fs = require('fs')
const { promsifiy } = require('util')

const inputFile = 'text.txt'
const outputFile = 'output.txt'

const readFileAsync = promsifiy(fs.readFile)
const writeFileAsync = promsifiy(fs.writeFile)

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
// const readFileAsync = (file, cb) => {
//     fs.readFile(file, 'utf-8', (err, data) => {
//         if (err)  {
//             return cb(err)
//         }
//         cb(null, data)
//     })
// }

// const writeFileAsync = (file, data, cb) => {
//     fs.writeFile(file, data, 'utf-8', (err) => {
//         if (err) {
//             return cb(err)
//         }
//         cb(null)
//     })
// }

// readFileAsync(inputFile, (error, data) => {
//     if (error) throw error
    
//     writeFileAsync(outputFile, data, (writeErr) => {
//         if (writeErr) throw writeErr
//         console.log('success');
//     })

// })
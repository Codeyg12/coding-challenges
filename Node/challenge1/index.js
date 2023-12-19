// Challenge 1: File Read and Write (Callbacks)
// Create a Node.js script that reads the contents of a text file and writes them to another file using asynchronous file I/O with callbacks. Ensure proper error handling and support for reading and writing large files.
const fs = require('fs')

const inputFile = 'text.txt'
const outputFile = 'output.txt'

const readFileAsync = (file, cb) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err)  {
            return cb(err)
        }
        cb(null, data)
    })
}

const writeFileAsync = (file, data, cb) => {
    fs.writeFile(file, data, 'utf-8', (err) => {
        if (err) {
            return cb(err)
        }
        cb(null)
    })
}

readFileAsync(inputFile, (error, data) => {
    if (error) throw error
    
    writeFileAsync(outputFile, data, (writeErr) => {
        if (writeErr) throw writeErr
        console.log('success');
    })

})
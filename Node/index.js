// 1. Server-side JavaScript: Understand the concept of running JavaScript on the server-side with Node.js. Learn about the event-driven, non-blocking I/O model that allows Node.js to handle concurrent requests efficiently.
// 2. Core Modules: Explore the core modules provided by Node.js, such as http, fs, path, and util. Understand their functionality and how to use them to build server-side applications.
// 3. Asynchronous Programming: Learn how to write asynchronous code using callbacks, Promises, and async/await. Understand the event loop and how it handles I/O operations efficiently.
// 4. Express.js: Study the popular web framework Express.js, which is built on top of Node.js. Learn how to create routes, handle HTTP requests and responses, and implement middleware for building web applications.
// 5. Package Management: Understand how to manage dependencies and use npm (Node Package Manager) to install, update, and publish packages. Learn about package.json and how to handle versioning and dependencies in Node.js projects.
// 6. Modules and Module System: Explore the module system in Node.js and learn how to create and use modules. Understand the concepts of exports and require, and how to organize and structure your codebase using modules.
// 7. File System Operations: Learn how to read from and write to the file system using the fs module. Understand file manipulation operations, such as reading files, writing files, creating directories, and handling streams.
// 8. Networking and HTTP: Study how to build networked applications and work with HTTP using Node.js. Learn about creating HTTP servers, making HTTP requests, handling responses, and working with RESTful APIs.
// 9. Streams: Understand how to work with streams in Node.js, which enable efficient processing of large amounts of data. Learn about readable streams, writable streams, and transform streams for tasks like file streaming and data transformation.
// 10. Database Integration: Explore different approaches to integrate databases with Node.js. Learn about using database drivers, Object-Relational Mapping (ORM) libraries like Sequelize, and Object-Document Mapping (ODM) libraries like Mongoose.
// 11. Authentication and Authorization: Study techniques for implementing authentication and authorization in Node.js applications. Learn about popular authentication strategies like JWT (JSON Web Tokens) and session-based authentication.
// 12. Error Handling and Debugging: Understand how to handle errors and debug Node.js applications. Learn about logging, error handling middleware, stack traces, and leveraging debugging tools like the Node.js debugger and Chrome DevTools.
// 13. Security Best Practices: Learn about security considerations when developing Node.js applications. Understand how to protect against common vulnerabilities like cross-site scripting (XSS) and SQL injection, and how to implement secure authentication and data validation.
// 14. Performance Optimization: Explore techniques for optimizing the performance of Node.js applications. Learn about code profiling, memory management, caching, and scaling strategies to handle high traffic and improve application performance.
// 15. Deployment and DevOps: Understand how to deploy Node.js applications to production environments. Learn about server setup, process management, containerization with Docker, and deployment on cloud platforms like AWS or Heroku.
// 16. Keeping Up with Node.js: Node.js is a rapidly evolving ecosystem, so it's important to stay updated with the latest features, best practices, and security updates. Follow the official Node.js documentation, community forums, blogs, and attend conferences to stay informed.



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
        cb('', data)
    })
}

const writeFileAsync = (file, data, cb) => {
    fs.writeFile(file, data, 'utf-8', (err) => {
        if (err) {
            return cb(err)
        }
        cb('')
    })
}

readFileAsync(inputFile, (error, data) => {
    if (error) throw error
    
    writeFileAsync(outputFile, data, (writeErr) => {
        if (writeErr) throw writeErr
    })

    console.log('success');
})


// Challenge 2: Promisify a Callback Function
// Take a common callback-based function, such as fs.readFile, and promisify it. Create a function that returns a Promise-based version of the callback function.
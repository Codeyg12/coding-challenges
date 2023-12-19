// Challenge 3: Fetch and Process Data (Promises)
// Using the Node.js http or axios library, fetch data from an external API (e.g., JSONPlaceholder or any public API). Once the data is retrieved, use Promises to process and display specific information from the response.
const axios = require("axios");
const fetchURL = "https://jsonplaceholder.typicode.com/todos/1";

const fetchAndProcess = () => {
  axios
    .get(fetchURL)
    .then((res) => {
      const data = res.data;
      const { userId, id, title } = data;
      console.log(
        `To Do item #${id} created by user #${userId} is called '${title}'`
      );
    })
    .catch((err) => {
      console.error(err.message);
    });
};

fetchAndProcess();

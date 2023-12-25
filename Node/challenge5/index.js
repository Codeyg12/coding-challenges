// Challenge 5: Implement a Promise-Based Queue
// Implement a simple queue system using Promises. You should be able to add tasks to the queue and execute them one by one in the order they were added, with each task completing before the next one starts.

const promiseQueue = () => {
  let queue = [];
  let processing = false;

  function queued(task) {
    queue.push(task);
    if (!processing) proccessQueue();
  }

  function proccessQueue() {
    if (queue.length > 0) {
      let task = queue.shift();
      proccessing = true;

      task()
        .then(() => {
          processing = false;
          proccessQueue();
        })
        .catch((err) => {
          console.error(err);
          processing = false;
          proccessQueue();
        });
    }
  }

  return { queued };
};

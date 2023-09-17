// You should use .then() to work with the response from the fetch operation because fetch returns a promise.
// You need to call .text() on the response to get the text content of the page.

const checkForText = (url: string, text: string) => {
  fetch(url)
    .then((response) => response.text())
    .then((body) => {
      if (body.includes(text)) {
        console.log(`Passed. "${text}" found on ${url}`);
      } else {
        console.error(`Failed. Did not find "${text}" on ${url}!`);
      }
    })
    .catch((error) => {
      console.error(`Error fetching ${url}: ${error}`);
    });
};

checkForText("https://www.komoot.com/team", "Quality");

/* Promises in programming are like guarantees for tasks that might take some time to complete, 
such as fetching data from a server or reading a file. They ensure that once the task is done, 
you'll get the result or be informed if something goes wrong.

So, we use promises in programming to handle tasks asynchronously, making our apps more efficient and responsive. 
They help manage complexity and ensure we get the results we expect, whether success or failure, without blocking other operations. */

// Promises are use to handle asynchronous operations
const randomNumberPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomValue = Math.random();
    if (randomValue > 0.5) {
      resolve(randomValue);
    } else {
      reject(new Error("Value is too small"));
    }
  }, 2000);
});

randomNumberPromise
  .then((results) => {
    console.log("Promis is fullfilled with vlaue", results);
  })
  .catch((results) => {
    console.error("Promise is rejected with error", results);
  });

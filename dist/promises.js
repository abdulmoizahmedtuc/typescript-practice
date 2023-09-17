"use strict";
const checkForText = (url, text) => {
    fetch(url)
        .then((response) => response.text())
        .then((body) => {
        if (body.includes(text)) {
            console.log(`Passed. "${text}" found on ${url}`);
        }
        else {
            console.error(`Failed. Did not find "${text}" on ${url}!`);
        }
    })
        .catch((error) => {
        console.error(`Error fetching ${url}: ${error}`);
    });
};
checkForText("https://www.komoot.com/team", "Quality");
const randomNumberPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            resolve(randomValue);
        }
        else {
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

/* JSON stands for "JavaScript Object Notation"

JSON is a text format for storing and transporting data 

The data is only JSON when it is in a string format. When it is converted to a JavaScript variable, it becomes a JavaScript object.
*/

/* JavaScript has a built in function for converting JSON strings into JavaScript objects:
In JSON, string values must be written with double quotes
When receiving data from a web server, the data is always a string.
Parse the data with JSON.parse(), and the data becomes a JavaScript object. */
let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';
let userObj = JSON.parse(userStr);
console.log(userObj);

// JavaScript also has a built in function for converting an object into a JSON string:
// In JavaScript, you can write string values with double or single quotes:
// When sending data to a web server, the data has to be a string.
let userObj1 = {
    name: "Sammy",
    email: "sammy@example.com",
    plan: "Pro"
  };
  let userStr1 = JSON.stringify(userObj);
  console.log(userStr);

// The replacer function can be used to filter out values, as any value returned as undefined will be out of the returned string:
let userObj3 = {
    name: "Sammy",
    email: "sammy@example.com",
    plan: "Pro"
  };
  
  function replacer(key: string, value: string | number | boolean) {
    console.log(typeof value);
    if (key === 'email') {
      return undefined;
    }
    return value;
  }
  let userStrReplacer = JSON.stringify(userObj, replacer);
  console.log(userStrReplacer);

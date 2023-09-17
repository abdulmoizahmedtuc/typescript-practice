"use strict";
let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';
let userObj = JSON.parse(userStr);
console.log(userObj);
let userObj1 = {
    name: "Sammy",
    email: "sammy@example.com",
    plan: "Pro"
};
let userStr1 = JSON.stringify(userObj);
console.log(userStr);
let userObj3 = {
    name: "Sammy",
    email: "sammy@example.com",
    plan: "Pro"
};
function replacer(key, value) {
    console.log(typeof value);
    if (key === 'email') {
        return undefined;
    }
    return value;
}
let userStrReplacer = JSON.stringify(userObj, replacer);
console.log(userStrReplacer);

// singleton -> when we are going to create object with constructor then it is known as singleton
// Object.create

//object literals ->

const mySym = Symbol("key1");

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Chaudhary",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Moday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser["email"]);
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this["full name"]}`);
}

console.log(JsUser.greeting())//undefined;
console.log(JsUser.greetingTwo());//undefined
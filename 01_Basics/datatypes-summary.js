// Primitive (Call By Value)

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100; // JavaScript is a dynamically typed language.
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 345643442545245463252342n; // Now automatically converted to bigInt using n behind the number


// Typescript const score:number = 100;

// Reference (Non primitive)

// Arrays, Objects, Functions.

const heroes = ["shaktiman", "naagraj", "doga"] //array
let myObj = {
    name: 'Heman',
    age: 21,
}

const myFunction = function() {
    console.log("Hello World!");
}

// console.log(typeof bigNumber); //bigInt
// console.log(typeof score); //Number
// console.log(typeof scoreValue); //Number
// console.log(typeof isLoggedIn); //boolean
// console.log(typeof outsideTemp); //object
// console.log(typeof id); //symbol
// console.log(typeof myObj); //object;
// console.log(typeof heroes); //object
// console.log(typeof myFunction); //function object


// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap Memory (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

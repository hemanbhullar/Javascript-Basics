// Primitive (Call By Value)

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100; // JavaScript is a dynamically typed language.
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

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

console.log(typeof bigNumber);
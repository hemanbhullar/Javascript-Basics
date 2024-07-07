
function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1, number2) { //parameters or formal values
//     console.log(number1+number2);
// }

function addTwoNumbers(number1, number2) { //parameters or formal values
    let  result = number1 + number2;
    return result;
}

const result = addTwoNumbers(3, 5); //arguments or actual values

// console.log("Result: " + result);

function loginUserMessage(username) {
    if(username !== undefined){
        return `${username} just logged in`
    }
    else{
        return "Please Enter a username";
    }
}

// console.log(loginUserMessage("heman"));
// console.log(loginUserMessage())

//Rest Operator(...) -> We  use this to pass multiple values
function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user);
handleObject({
    username: "heman",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 1000]));
//  Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date("2023-01-14") //yy-mm-dd
let myCreatedDate = new Date("01-14-2023") 
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); //in millisecond from 1st jan 1970 till now
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
});

//JavaScript Lesson 1

// Legacy. (undefined)
var a = 5;
console.log(a); // console logging

 // The new one
let b = 5;
console.log(b);
b = 8;
console.log(b);


//constant
const c = 5;
console.log(c);
//c = 8; Constant not to be edited
//console.log(c);

//type of data
let myVariable = -1;
console.log(typeof (myVariable));

let myVariable1 = 1.10;
console.log(typeof (myVariable1));

let myVariable2 = 110999999999999;
console.log(typeof (myVariable2));

//string
let myString = "Lol check";
console.log(typeof (myString));

let myString1 = 'Lol check';
console.log(typeof (myString1));

//boolean
let myBool = false;
console.log(typeof (myBool));
console.log(typeof (3 == 2)); // operation type

//JS fitches

let myVar = null; //null
console.log(typeof (myVar));
myVar = undefined; // undefined
console.log(typeof (myVar));
myVar = Symbol(); // symbol type, unical one
console.log(typeof (myVar));

//object
let myObj = {
    Name: "Help",
    Number: 22
};
console.log(typeof (myObj));
let myMas = ["jbebe", 1, 'lol']; //array

let reqExp = /w/ + /q/; //regular expression
console.log(typeof (reqExp));

myVar = 1n; // big int
console.log(typeof (myVar));

let err = Error("Test error for testing Error object"); //errors
console.log(typeof (err));

let foo = function () {}; //function
console.log(typeof (foo));


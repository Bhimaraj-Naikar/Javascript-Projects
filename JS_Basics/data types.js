const $name = `${2 + 2}`;
let num = 2;
let float = 0.5;
let bool = true;
let str = 'Hello, World!';
let undef;
let nullVar = null;
let obj = { name: 'John', age: 30 };
let arr = [1, 2, 3, 4, 5];
let func = function() {
    console.log('Hello, World!');
    };
let regex = /hello/i;
let symbol = Symbol('hello');
let bigInt = 12345678901234567890n;
let error = new Error('Something went wrong');
let promise = new Promise((resolve, reject) => {
setTimeout(() => {
    resolve('Hello, World!');
    }, 2000);
    });
// Comaprison operator diff between '==' and '==='
// let a  =5
// let b  ="5"
// console.log( 5 == "5") // true , cuz it compares only values not the datatype
// console.log( 5 === "5") // false , cuz it compares both value and Datatype


//Types of functions in JS

//A FUNCTION DECLARATION ( must use this function if you're using 'this' keyword)
function name(parameter){
    //statements
}

// A function expressiom
const name = function(param){
    //statements
}

// A Arrow function (99% of JS devs use this tyope of functions)

const name = (params) => {
    //statements
}
// more about arrow funciton
// 1 way to declare arrow function
const square = param => param * param; // if you have only one param
console.log(square(10));
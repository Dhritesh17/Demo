var imVar = "hello var";
let imLet = "hello let";

var message = "global scope";
function greet() {
  var message = "local scope";
  console.log(message);
}
greet();
console.log(message);

var message = "global scope";
function greet1() {
  message = "local scope";
  console.log(message);
}
greet1();
console.log(message);

console.log("VAR");
var num = 10;
console.log(num);
if (num === 10) {
  var num = 20;
  console.log(num);
}
console.log(num);

console.log("LET");
let num1 = 10;
console.log(num1);
if (num1 === 10) {
  let num1 = 20;
  console.log(num1);
}
console.log(num1);

var a;
console.log(a);
a = 1000;
console.log(a);

let b;
console.log(b);
b = 2000;
console.log(b);

const messa = "Hello JavaScript";
console.log(messa);
// messa = "hi";
// console.log(msessa);

function say(mes = 2) {
  console.log(mes);
}
say(4);

// Spread operator (...)
const array1 = [1, 3, 5, 7, 9];
const array2 = [...array1, 10, 12];
console.log(array2);

// Template Literal
let simplestring = "this is a normal string";
let templit = `this    is a
template literal`;
console.log(simplestring);
console.log(templit);

console.log("normal string = " + simplestring);

console.log("normal" + simplestring + "string = ");

console.log(`template ${templit} literal =`);

// console.log("the normal lang is "JavaScript" ");
// console.log('the '"normal 'lang is ''"JavaScript" ');
console.log(`the" normal ;'lang is "JavaScript' `);

// the normal lang is "JavaScript"

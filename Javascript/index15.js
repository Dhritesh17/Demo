console.log("MULTI-LINE COMMENT");
/* var x = 20;
var y = 40; */


console.log("ARITHMETIC OPERATOR");
// +
// -
// *
// ** 2**4=2^4=16
// /
// %
// ++ x=2; x++
// -- x=1; x--


console.log("ASSIGNMENT OPERATOR");
// =
// x+=5 x=x+5
// -=
// *=
// /=
// %=
// **=  x**=2; x=x**2


console.log("COMPARISON OPERATOR");
// ==
// ===
var x = 20;
var y = "20";
console.log(x == y);
console.log(x === y);
// !=
// !==
var x = 20;
var y = "20";
console.log(x != y);
console.log(x !== y);
// >
// <
// >=
// <=


console.log("LOGICAL OPERATOR");
// &&
console.log(true && false);
// ||
console.log(true || false);
// !
console.log(!true);


console.log("IF-ELSE");
var x = 20;
var y = "20";
if (x === y) {
  console.log("this is true");
} else if (x > y) {
  console.log(typeof x);
  console.log(typeof y);
  console.log("first is false, I am true");
} else {
  console.log(typeof x);
  console.log(typeof y);
  console.log("this is false");
}


console.log("SWITCH-CASE");
var n1 = 50;
var n2 = 20;
var oper = "+";
switch (oper) {
  case "+":
    console.log(n1 + n2);
    break;
  case "-":
    console.log(n1 - n2);
    break;
  default:
    console.log("neither of them");
}


console.log("FOR-LOOP");
var sum = 0;
var start = 1;
var final = 3;
for (var i = start; i <= final; i++) {
  console.log(i);
  sum = sum + i;
}
console.log("for SUM =", sum);

// i=1
// sum= 0 + 1 =1
// i=2
// sum = 1 + 2 = 3
// i=3
// sum = 3 + 3 = 6


console.log("WHILE-LOOP");
var sum = 0;
var start = 1;
var final = 3;
var i = start;
while (i <= final) {
  sum = sum + i;
  i++;
}
console.log("while SUM =", sum);


console.log("DO-WHILE-LOOP");
var sum = 0;
var start = 1;
var final = 3;
var i = start;
do {
  sum = sum + i;
  i++;
} while (i <= final);
console.log("do-while SUM =", sum);


console.log("break statement");
for (var x = 1; x <= 5; x++) {
  if (x == 2) {
    console.log("Hi, I am 2");
    break;
    console.log("Hi, I am 2");
  }
  console.log(x);
}


console.log("continue statement");
for (var x = 1; x <= 5; x++) {
  if (x == 2) {
    console.log("Hi, I am 2");
    continue;
    console.log("Hi, I am 2");
  }
  console.log(x);
}


//  DOUBTS (arithmetic + - & concatenation)
console.log(10+20); //30
console.log("10"+20); //"1020"
console.log(+"10"-20); //-10
console.log("10"+"20") //"1020"
console.log(+"10"+20); //30
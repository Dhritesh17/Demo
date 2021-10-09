function ShowString() {
  console.log("this function is called");
}
console.log(ShowString());

function printName(name) {
  console.log(name);
}
printName("Nikhil");

function addNumbers(n1, n2) {
  console.log("inside function", n1 + n2);
  return n1 + n2;
  console.log("this wont be executed");
}
var num1 = 10;
var num2 = 20;
var result = addNumbers(num1, num2);
console.log("outside function", result);

var num = 1;
function printNum() {
  console.log(num);
  num++;
  if (num <= 3) {
    printNum();
  } else {
    var n = "nikhil";
    return n;
  }
}
var res = printNum();
console.log(res);

var colors = ["r", 1, 2, "b", "B", "R", "qgubweigb"];
colors.push("a");
colors.unshift("f");
colors.pop();
colors.shift();
console.log(colors.join("..."));
console.log(colors.indexOf("R"));
console.log(colors.indexOf("nik"));
colors.sort();
colors.reverse();
console.log(colors);
var newcolors = colors.slice(1, 3);
console.log(newcolors);

var age = [2, "h2", "h3", "h4", "h5"];
var f = age.find(myFunc);
function myFunc(value, index, array) {
  return value > "h1";
}
console.log(f);

age.forEach(function (e) {
  console.log(e + 5);
});

// for (var e in age) {
//   console.log(e);
// }

for (var e of age) {
  console.log(e + 5);
}

var obj = { 65: "A", 66: "B", 67: "C", 68: "D" };
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
// [
//   [65, "A"],
//   [66, "B"],
//   [67, "C"],
//   [68, "D"]
// ];

var objk = {
  pr1: 42,
};
console.log(objk.hasOwnProperty("pr1"));
console.log(objk.hasOwnProperty("pr2"));

var obje = {
  name: "JS",
};
var freezedObj = Object.freeze(obje);
console.log(freezedObj);
console.log("check", freezedObj === obje);
// freezedObj["name"] = "html";
console.log(Object.isFrozen(obje));

obj = { 65: "A", 66: "B", 67: "C", 68: "D" };
obj.foo = "bar1";
console.log(obj.foo);
console.log(obj);
obj.new_foo = "bar2";
console.log(obj.new_foo);
console.log(obj);

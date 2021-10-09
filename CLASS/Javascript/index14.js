console.log("this is the main console area");
// console.error("this will print in error format");
// console.warn("this will print in warning format");

// number
// 3
// 3.38
// 4e-2 = 4 * 10^-2
// -(25^3-1)or(-15624) to (25^3-1)or(15624)

// String
// "hello world"
// 'hello'

// bigint
var v1 = 90259245295892759027059n
var v2 = 90259245295892759027059
console.log(v1)
console.log(typeof v1)
console.log(v2)
console.log(typeof v2)

// null
var t = null;
console.log(t);

// undefined
var ti;
console.error(ti);

// Boolean
console.log(true);
console.log(false);

// Array
// ["hi", "hello"]
// [1, 2, 3]
var arr = ["hello", 50, 22.2, "bye"];
console.log(arr);
console.log(arr[0]);
console.log(arr[3]);

// Object
var obj = {
  name: "We are Devs",
  age: 1000,
  bol: true,
  arr: ["hello", 5, 2, "bye"],
  good_dev: "Yes, I am"
};
console.log(obj);
console.log(obj.name);
console.log(obj.good_dev);
console.log(obj.arr);
console.log(obj.arr[3]);
console.log(obj["name"]);
console.log(obj["good_dev"]);
console.log(obj["arr"][3]);

// Variable
var variable_name = "first_value";
console.log(variable_name);
variable_name = "second_value";
console.log(variable_name);

// String Methods
var vari = "HelLo JavaScript, you are good";
console.log(vari);
var Vari = "hello";
console.log(vari.toUpperCase());
console.log(vari.toLowerCase());
console.log(vari.slice(0, 4));
console.log(vari.replace("o", "JS"));
console.log(vari);
// vari  = vari.replace("JavaScript", "JS");
console.log(vari.includes("JavaScript"));
console.log(vari.includes("avacript"));
var newString = "1234";
console.log(newString);
console.log(parseInt(newString));
console.log(parseInt(vari));

// Number Methods
var num = 38.367;
console.log(num);
console.log(num.toString());
console.log(num.toExponential());
console.log(num.toFixed(2));
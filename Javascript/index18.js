console.log(document.querySelectorAll(".firstbox"))
console.log(document.querySelector(".firstbox"))
console.log(document.getElementsByClassName("firstbox"))
console.log(document.getElementById("internal_ul"))

console.log(document.querySelector("#img_piz").src)

document.querySelector("#img_piz").src = "/Users/nikhilagarwal/MyCodes/ShapeAI_Classes/A0821/assets/appleicon.jpeg"


// console.log(document.getElementById("internal_ul"))
var childNodeanything = document.createElement("div");
// console.log(childNodeanything)
// childNodeanything.className = "mystyle"
childNodeanything.classList.add("mystyle1");
childNodeanything.classList.add("mystyle2");
childNodeanything.innerHTML = "I AM THE NEW EXAMPLE"
console.log(childNodeanything)
document.querySelector(".firstbox").appendChild(childNodeanything)
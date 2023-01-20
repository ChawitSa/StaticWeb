// alert("Hello");

// var x = 10;
// console.log(x);
// x = 20;
// console.log(x);
// let y;
// y = 5;
// console.log(x, " ", y);
// const z = 15;
// console.log(z);

// var abc = 123;
// let array = [1, 2, 3, 4, 5];
// console.log(typeof abc);
// console.log(typeof "123");
// console.log(typeof true);
// console.log(array);
// console.log(array.length);
// array.push(10);
// console.log(array);
// console.log(array.length);
// var obj = { name: "Jin", age: 20 };
// console.log(obj.name);
// var un = undefined;
// console.log(typeof un);

// function plus(x, y) {
//   return x + y;
// }
// var r = plus(2, 3);
// console.log(r);

// var aarray = new Array(1, 2, 3);
// console.log(aarray);
// aarray.push(19);
// aarray.pop();
// aarray.unshift("Add index 0");
// aarray.shift();

// aarray.forEach((val, ind) => {
//   console.log(ind, "=", val);
// });

// var myObj = {};
// var myObj = new Object();
// console.log(typeof myObj);

// myObj.name = "Googl";
// myObj.url = "google.com";
// console.log(myObj);
// console.log(myObj["url"]);

// myObj.nameLength = function () {
//   return this.name.length;
// };
// console.log(myObj.nameLength());
// delete myObj.url;

var test1 = [
  { x: 13, y: 14 },
  { x: 23, y: 15 },
  { x: 33, y: 16 },
  { x: 43, y: 17 }
];
test1.forEach((val) => {
  if (val.x === "43") console.log("x equal to", val.x);
  else console.log("y equal to", val.y);
});

switch ((mySwitch = "two")) {
  case "one":
    console.log("mySwitch = 1");
    break;
  case "two":
    console.log("mySwitch = 2");
    break;
  default:
    console.log("mySwitch = 3");
    break;
}

for (let x = 1; x < 20; x++) {
  console.log("print", x);
}

let a = 0;
while (a < 20) {
  console.log("A = " + a);
  a++;
}

var myDiv = document.getElementById("myDiv");
myDiv.style.width = "200px";
myDiv.style.height = "200px";
myDiv.style.background = "red";
myDiv.innerHTML = "<h1>Hello World!<h1>";

var elements = document.getElementsByClassName("myClassName");
elements[0].innerHTML = "My class name";

for (let e = 1; e < elements.length; e++) {
  elements[e].innerHTML = "My class name " + e;
}

var myBody = document.getElementsByTagName("body");
var myh1 = document.createElement("h1");
var textNode = document.createTextNode("This is a body");
myh1.appendChild(textNode);
myBody[0].appendChild(myh1);

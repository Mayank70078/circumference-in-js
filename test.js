/*console.log(`hello`);
var age = 25;
var price = 60000;
var gpa = 7.68;
console.log("Your age is "+ age);
console.log("Your laptop's price is " + price);
console.log("Your gpa is " + gpa);
console.log(typeof age);
let firstname= "BRo";
console.log(`Your name is ${firstname}`);
let isOnline = true;
let isForSale= false;
let isStudent = true;
let isTeacher = false;

console.log(`Bro is online:${isOnline}`);
console.log(`Bro is for sale:${isForSale}`);
console.log(`Bro is a student:${isStudent}`);
console.log(`Bro is a teacher:${isTeacher}`);

document.getElementById(1).textContent = `Your name is ${firstname}`;
document.getElementById(2).textContent= `Your age is `+ age;
document.getElementById(3).textContent = `Enrolled:${isStudent}`; 

let username = window.prompt("What is your username");
console.log(username);
let username;
document.getElementById("btn").onclick = function(){
    username = document.getElementById("MyText").value;
    document.getElementById("myH1").textContent= `Hello ${username}`;
}
let age = window.prompt("What is your age?")
age = Number(age);
age +=1;
console.log(`Happy Birthday! You are ${age} years old!`, typeof age);
let x ="pizza";
let y ="age";
let z = "zeus";
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);

console.log(z, typeof z);*/

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius=document.getElementById("myText").value;
    radius=Number(radius);

    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent= circumference + " cm";
}
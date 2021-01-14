"use strict";



var user = prompt('Hello. Please tell me your name.');

alert(`Welcome, ${user}`);


var responseOne = prompt("Do you think I'm an earthling?").toLowerCase();

if(responseOne === 'yes' || responseOne === 'y' ){
  // console.log("Good, good, exactly what I want you to think.");
  alert("Good, good, exactly what I want you to think.");

} else if(responseOne === 'no' || responseOne === 'n'){
    // console.log("Of course I am, how dare you. I'll remember this when we conquer this planet.");
    alert("Of course I am, how dare you. I'll remember this when we conquer this planet.");

} else {
  // console.log("Please answer yes or no.");
  alert("Please answer yes or no.");
}

var responseTwo = prompt("Do I play video games?").toLowerCase();

if(responseTwo === 'yes' || responseTwo === 'y' ){
  // console.log("Indeed, I'm an avid gamer and currently looking forward to Monster Hunter Rise.");
  alert("Indeed, I'm an avid gamer and currently looking forward to Monster Hunter Rise.");

} else if(responseTwo === 'no' || responseTwo === 'n'){
    // console.log("Really? Don't I look like I do though?");
    alert("Really? Don't I look like I do though?");

} else {
  // console.log("Please answer yes or no.");
  alert("Please answer yes or no.");
}

var responseThree = prompt("Do I drink alcohol?").toLowerCase();

if(responseThree === 'yes' || responseThree === 'y' ){
  // console.log("Most nights since I have trouble sleeping.");
  alert("Most nights since I have trouble sleeping.");

} else if(responseThree === 'no' || responseThree === 'n'){
    // console.log("I'm actually a big fan of gin");
    alert("I'm actually a big fan of gin.");

} else {
  // console.log("Please answer yes or no.");
  alert("Please answer yes or no.");
}

var responseFour = prompt("Am I an old man?").toLowerCase();

if(responseFour === 'yes' || responseFour === 'y' ){
  // console.log("I think so too.");
  alert("I think so too.");

} else if(responseFour === 'no' || responseFour === 'n'){
    // console.log("I sure feel like one.");
    alert("I sure feel like one.");

} else {
  // console.log("Please answer yes or no.");
  alert("Please answer yes or no.");
}

var responseFive = prompt("Have I ever rode a unicycle.").toLowerCase();

if(responseFive === 'yes' || responseFive === 'y' ){
  // console.log("I was hoping to develop a sense of balance and strong core.");
  alert("I was hoping to develop a sense of balance and strong core.");

} else if(responseFive === 'no' || responseFive === 'n'){
   // console.log("Surprisingly true, I have the scars to prove it.");
  alert("Surprisingly true, I have the scars to prove it.");

} else {
  // console.log("Please answer yes or no.");
  alert("Please answer yes or no.");
}

alert(`Thanks for playing along, ${user}`);
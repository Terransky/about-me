"use strict";


var score = 0;
var user = prompt('Hello. Please tell me your name.');

alert(`Welcome, ${user}`);


var responseOne = prompt("Do you think I'm an earthling?").toLowerCase();

if(responseOne === 'yes' || responseOne === 'y' ){
  // console.log("Good, good, exactly what I want you to think.");
  alert("Good, good, exactly what I want you to think.");
  score++;

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
  score++;

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
  score++;

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
  score++;

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
  score++;

} else if(responseFive === 'no' || responseFive === 'n'){
   // console.log("Surprisingly true, I have the scars to prove it.");
  alert("Surprisingly true, I have the scars to prove it.");

} else {
  // console.log("Please answer yes or no.");
  alert("Please answer yes or no.");
}


alert("Let's play a quick guessing game.");


for(var i = 4; i > 0; i--) {

  var answerSix = 28;
  alert(`You have ${i} chances remaining.`);
  var responseNumber = parseInt(prompt("Can you guess what number I'm thinking of between 1 and 50?"));

  if(0 > responseNumber || responseNumber > 50) {
    alert("Please answer with a number between 1 and 50.");
    i++;
  
  } else if(responseNumber > answerSix) {
    alert("Sorry, just a tad high.");
    if(i === 1) {
      alert(`Sorry, that was your final chance. The correct answer is ${answerSix}.`);
    }  

  } else if(responseNumber < answerSix) {
    alert("Sorry, just a tad low.");
    if(i === 1) {
      alert(`Sorry, that was your final chance. The correct answer is ${answerSix}.`);
    }
  
  } else if(responseNumber === answerSix) {
      alert("Ding ding ding! There you go");
      if(i===4) {alert("Wow, on your first try, way to go!");}
      score++;
      break;
  
  } else {
      alert("Please answer with an arabic number.");
      i++;    
  }
}

alert("Alright, last quick game.");

var answerSeven = ["sunday", "friday"];

for(var i = 6; i > 0; i--) {
  
  alert(`You have ${i} chances remaining.`);
  var response = prompt("Can you guess one of my favorite days of the week?").toLowerCase();

  if(response === answerSeven[0] || response === answerSeven[1]) {
    alert("Good guess. Too easy?");
    score++;
    break;
  
  } else {
     alert("Nice try but no dice."); 
  } 

}

alert(`The full list of answers is: ${answerSeven[0]} and ${answerSeven[1]}`);



alert(`Thanks for playing along, ${user}. You got ${score} out of 7 questions correct!`); 

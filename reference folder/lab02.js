'use strict';

var user = prompt('Please introduce yourself.');
// console.log('Hi ' + user);
alert('Hi, ' + user + '. Please answer yes or no to the following questions.');


var q1 = prompt('Do you identify as an earthling?');
q1 = q1.toLowerCase();

if(q1 === 'yes' || q1 === 'y' ){
  // console.log('I figured but I didn't want to assume.');
  alert('I figured but I didn\'t want to assume.');

} else if(q1 === 'no' || q1 === 'n'){
    // console.log('Oh, how unusual.');
    alert('Oh, how unusual.');

} else {
  // console.log('Please answer yes or no.');
  alert('Please answer yes or no.');
}

var q2 = prompt('Do you think humanity has a future?');
q2 = q2.toLowerCase();

if(q2 === 'yes' || q2 === 'y' ){
  // console.log('Let's hope so.');
  alert('Let\'s hope so.');

} else if(q2 === 'no' || q2 === 'n'){
    // console.log('Yeah, same.');
    alert('Yeah, same.');

} else {
  // console.log('Please answer yes or no.');
  alert('Please answer yes or no.');
}

var q3 = prompt('Do you want to live on this planet anymore?');
q3 = q3.toLowerCase();

if(q3 === 'yes' || q3 === 'y' ){
  // console.log('2020 has been rough.');
  alert('I guess it could be worse.');

} else if(q3 === 'no' || q3 === 'n'){
    // console.log('I guess it could be worse.');
    alert('2020 has been rough.');

} else {
  // console.log('Please answer yes or no.');
  alert('Please answer yes or no.');
}

var q4 = prompt('Will you fly with Papa Elon to Mars?');
q4 = q4.toLowerCase();

if(q4 === 'yes' || q4 === 'y' ){
  // console.log('See you there.');
  alert('See you there.');

} else if(q4 === 'no' || q4 === 'n'){
    // console.log('I feel ya, even flying international is exhausting.);
    alert('I feel ya, even flying international is exhausting.');

} else {
  // console.log('Please answer yes or no.');
  alert('Please answer yes or no.');
}

var q5 = prompt('Or are cloud cities on Venus more your style?');
q5 = q5.toLowerCase();

if(q5 === 'yes' || q5 === 'y' ){
  // console.log('Balloon cities are a fun concept.');
  alert('Balloon cities are a fun concept, ' + user + '.');

} else if(q5 === 'no' || q5 === 'n'){
    // console.log('I suppose sulphur clouds would give anyone pause.');
    alert('I suppose sulphur clouds would give anyone pause, ' + user + '.');

} else {
  // console.log('Please answer yes or no.');
  alert('Please answer yes or no, ' + user + '.');
}
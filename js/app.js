'use strict';

function welcome() {
  let userName = prompt('Please enter your name');
  document.getElementById('name').textContent = userName + ' WELCOME IN';
}
welcome();
//Jordan Yamada Edit function one
function question1() {
  let city = prompt('Do I live in Seattle').toLocaleLowerCase();
  if (city === 'yes' || city === 'y') {
    //console.log('yes I do live in Seattle');
    alert('yes I do live in Seattle');
  }
  else if (city === 'no' || city === 'n') {
    alert('wrong I do live in Seattle');
    //console.log('Wrong I do live in Seattle');
  }
  else {
    alert('Please input correct values');
  }
}
question1();
function question2() {
  let country = prompt('Do I live in the United States').toLocaleLowerCase();
  if (country === 'yes' || country === 'y') {
    alert('yes I do live in the United States');
    //console.log('yes I do live in the United States')
  }
  else if (country === 'no' || country === 'n') {
    alert('wrong I do live in the United States');
  //console.log('wrong I do live in the United States')
  }
  else {
    alert('Please input correct values, Y/Yes or N/No');
  }
}
question2();
function question3() {
  let SK = prompt('Did I come from South Korea').toLocaleLowerCase();
  if (SK === 'yes' || SK === 'y') {
    alert('yes I used to live in South Korea');
  //console.log('yes I do live in the United States')
  }
  else if (SK === 'no' || SK === 'n') {
    alert('wrong I am from South Korea');
  //console.log(wrong, I am from South Korea')
  }
  else {
    alert('Please input correct values, Y/Yes or N/No');
  }
}
question3();
function question4() {
  let pet = prompt('Do I own any pets').toLocaleLowerCase();
  if (pet === 'yes' || pet === 'y') {
    alert('Incorrect, I do not have any pets');
  //console.log('Incorrect, I do not have any pets')
  }
  else if (pet === 'no' || pet === 'n') {
    alert('You are right, I do not have any pets');
    //console.log('You are right I do not have any pets')
  }
  else {
    alert('Please input correct values, Y/Yes or N/No');
  }
}
question4();
function question5() {
  let food = prompt('Is my favorite food porkbelly?').toLocaleLowerCase();
  if (food === 'yes' || food === 'y') {
    alert('yes it is');
    //console.log('yes it is)
  }
  else if (food === 'no' || food === 'n') {
    alert('Incorrect');
    //console.log('Incorect')
  }
  else {
    alert('Please input correct values, Y/Yes or N/No');
  }
}
question5();


let favNum = '7';
let attemptsRemaining = 4;
for (let i = 1; i <= attemptsRemaining; i++) {
  let userResponse = prompt('Between number 1 ~ 10 guess my favorite number', '0');
  console.log('i = ', i);
  console.log(userResponse + 'userResponse');
  console.log(attemptsRemaining);
  alert(`I have ${attemptsRemaining - i} attempts remaining`);
  if (userResponse === favNum) {
    console.log('You are correct');
    break;
  }
  else if (userResponse < favNum)
  {
    alert('Too low, Guess again, between 1 ~ 10');
    console.log('Low incorrect');
  }
  else if (userResponse > favNum)
  {
    alert('Too high, Guess again, between 1 ~ 10');
    console.log('High incorrect');
  }
  else
  {
    console.log('invalid reponse');
  }
}
console.log('You are done!');
alert('you are done!');


let sevenAttem = 7;
let isCorrect = false;
questionSeven: while (sevenAttem && !isCorrect) {
  let test1 = ['porkbelly','sushi'];
  let sevenResponse = prompt('porkbelly,tofu, sushi ,burrito, chips Two of these foods are my favorite please guesse my favorite food', 'Porkbelly, tofu');
  for (let i = 0 ; i <= test1.length; i++){
    if (test1[i] === sevenResponse){
      alert('YOU ARE CORRECT WOW YOU KNOW ME WELL');
      isCorrect = true;
      break questionSeven;
    }
  }
  alert('try again');
  sevenAttem--;
}

//display the answers
// how to do correct answers

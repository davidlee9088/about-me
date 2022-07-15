'use strict';

function welcome() {
  let userName = prompt('Please enter your name');
  document.getElementById('name').textContent = userName + ' WELCOME IN';
}
welcome();

let counter = 0;


function question1() {
  let city = prompt('Do I live in Seattle').toLocaleLowerCase();
  if (city === 'yes' || city === 'y') {

    alert('yes I do live in Seattle');
    counter += 1;
    console.log(counter);
  }
  else if (city === 'no' || city === 'n') {
    alert('wrong I do live in Seattle');

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
    counter += 1;
    console.log(counter);

  }
  else if (country === 'no' || country === 'n') {
    alert('wrong I do live in the United States');

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
    counter += 1;
    console.log(counter);

  }
  else if (SK === 'no' || SK === 'n') {
    alert('wrong I am from South Korea');

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

  }
  else if (pet === 'no' || pet === 'n') {
    alert('You are right, I do not have any pets');
    counter += 1;
    console.log(counter);

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
    counter += 1;
    console.log(counter);
  }
  else if (food === 'no' || food === 'n') {
    alert('Incorrect');

  }
  else {
    alert('Please input correct values, Y/Yes or N/No');
  }
}
question5();


function sixQuestion() {
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
      counter += 1;
      console.log(counter);
      break;
    }
    else if (userResponse < favNum) {
      alert('Too low, Guess again, between 1 ~ 10');
      console.log('Low incorrect');
    }
    else if (userResponse > favNum) {
      alert('Too high, Guess again, between 1 ~ 10');
      console.log('High incorrect');
    }
    else {
      console.log('invalid reponse');
    }
  }
  console.log('You are done!');
  alert('you are done!');
}
sixQuestion();

let test1 = ['porkbelly', 'sushi'];
function sevenQuestion() {
  let sevenAttem = 6;
  let isCorrect = false;
  questionSeven: while (sevenAttem && !isCorrect) {
    let sevenResponse = prompt('porkbelly,tofu, sushi ,burrito, chips Two of these foods are my favorite please guesse my favorite food', 'Porkbelly, tofu').toLocaleLowerCase();
    console.log(sevenResponse);
    for (let i = 0; i <= test1.length; i++) {
      if (test1[i] === sevenResponse) {
        alert('YOU ARE CORRECT WOW YOU KNOW ME WELL');
        isCorrect = true;
        counter++;
        break questionSeven;
      }
    }
    sevenAttem--;
    alert(`try again,you have ${sevenAttem} chances left`);
  }
  alert('the correct answers were porkbelly or sushi');
}
sevenQuestion();

function totalright() {
  alert(`You were correct ${counter}/7 questions`);
}
totalright();





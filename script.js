'use strict';
/*
JavaScript DOM manupilation
https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648409#search

--Select a DOM object
document.querySelector(class item)

-Set a DOM object
document.querySelector('.message').textContent = 'COrrect Number!';

--Grab a value from the form
document.querySelector('.guess').value;
--set value 
document.querySelector('.guess').value = 23;

--Action trigger or EventListener
document.querySelector('.check').addEventListener('click', function(){
    console.log(document.querySelector('.guess').value);
    console.log(typeof guess); //<--a string
});
    //.check is a button. When clicked, function is run. 

--Changing css with querySelector
 document.querySelector('body').style.backgroundColor = '#60b347'; 
*/

let score = 0;
const secretNumber = Math.trunc(Math.random() * 10) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //Not a number
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //Correct guess!
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').style.width = '30rem';
    if (score < 5) {
      score++;
      document.querySelector('.score').textContent = score;
      if (score === 5) {
        //You've won
        document.querySelector('.message').textContent = "You've won!";
        document.querySelector('body').style.backgroundColor = '#60b347';
      }
    }
    //Guess is too high
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
    //Guess is too low
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  const secretNumber = Math.trunc(Math.random() * 10) + 1;
});

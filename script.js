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

/*
Personal note
WHat do I need to learn. key methods to do things. If I have enough of it,
  I can create things based on my wishes.
*/

let score = 0;
let secretNumber = Math.trunc(Math.random() * 10) + 1;
const number_field = document.getElementById('guess1');

document.querySelector('.check').addEventListener('click', function () {
  const btnCheckNext = document.querySelector('.check').textContent;
  //continue
  if (btnCheckNext === 'Next') {
    nextMatch();
    //Lets play!
  } else if (btnCheckNext === 'Check!') {
    game();
  }
});
//AGAIN REset game
document.querySelector('.again').addEventListener('click', function () {
  score = 0;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  nextMatch();
});

function nextMatch() {
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style = '15rem';
  number_field.hidden = false;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.check').textContent = 'Check!';
}

function game() {
  console.log(secretNumber);
  const guess = Number(document.querySelector('.guess').value);
  //bad input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    //Wrong guess
  } else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? 'Too high!' : 'Too low!';
    //Correct guess
  } else {
    if (score < 5) {
      score++;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = score;
      document.querySelector('.check').textContent = 'Next';
      document.querySelector('.message').textContent = 'Score!';
      number_field.hidden = true;
      // document.querySelector('.guess').value = '';
      document.querySelector('.number').style.width = '30rem';
    } else {
      //You've won
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = score;
      document.querySelector('.check').textContent = "You've won!";
      number_field.hidden = true;
      document.querySelector('.message').textContent =
        'Press Again btn to play!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }
  }
}
// const nextMatch = function () {
//   const secretNumber = Math.trunc(Math.random() * 10) + 1;
//   document.querySelector('.check').textContent = 'Check!';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').textContent = '';
// };

// let score = 0;
// const secretNumber = Math.trunc(Math.random() * 10) + 1;

// document.querySelector('.check').addEventListener('click', function () {
//   const btnCheckNext = document.querySelector('.check').textContent;

//   //Event check number playing NEXT match
//   if (btnCheckNext === 'Next') {
//     nextMatch();
//   }

//   //CHECK if correct
//   if (btnCheckNext === 'Check!') {
//     //Not a number
//     if (!guess) {
//       document.querySelector('.message').textContent = 'No number!';
//       //Correct guess!
//     } else if (guess === secretNumber) {
//       document.querySelector('.message').textContent = 'Correct Number!';
//       document.querySelector('.number').textContent = secretNumber;
//       document.querySelector('.number').style.width = '30rem';
//       document.querySelector('.guess').textContent = '';
//       document.querySelector('.check').textContent = 'Next';

//       if (score < 5) {
//         score++;
//         document.querySelector('.score').textContent = score;
//         document.querySelector('.check').textContent = 'Next';
//         if (score === 5) {
//           //You've won
//           document.querySelector('.message').textContent = "You've won!";
//           document.querySelector('body').style.backgroundColor = '#60b347';
//         }
//       }

//       //Guess is too high
//     } else if (guess > secretNumber) {
//       document.querySelector('.message').textContent = 'Too high!';
//       //Guess is too low
//     } else if (guess < secretNumber) {
//       document.querySelector('.message').textContent = 'Too Low!';
//     }
//   }
// });

// //AGAIN REset game
// document.querySelector('.again').addEventListener('click', function () {
//   score = 0;
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('body').style.backgroundColor = '#222';

//   const secretNumber = Math.trunc(Math.random() * 10) + 1;
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').textContent = '';
// });

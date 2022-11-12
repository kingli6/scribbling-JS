'use strict';

/**NOTES
 * --These two does the same thing.
 *  Note the # is required in querySelector
 *      querySelector('#score--0');
 *      getElementById('score--1');
 *  PS getElementById is faster in selecting ID's than querySelector.
 *  But not important for beginners or small projects
 *
 * --Hiding an object
 *      diceElement.classList.add('hidden');
 *
 * --Adding dice image
 *      diceElement.src = `dice-${dice}.png`;
 * --toggle() function removes a class if it exists, adds it if it doesn't
 *
 */
//Selecting elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
/**
 * NOTE: This work of yours is YOUR work. WHICH WILL BE seen by others.
 * SO.... add functions/features, and let it be understandable.
 */

//Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

btnNew.addEventListener('click', function () {
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  scores[0] = 0;
  scores[1] = 0;
  activePlayer = 0;
  currentScore = 0;
  playing = true;
  document.getElementById(`score--0`).textContent = scores[0];
  document.getElementById(`score--1`).textContent = scores[1];
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  document
    .querySelector('.player--0') //Made a mistake on not inlcuding the .
    .classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
});
//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Displaying the dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    //3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to active players main score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if players score is >= 100
    if (scores[activePlayer] >= 30) {
      //finish the game
      playing = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`) //Made a mistake on not inlcuding the .
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switich to the next player
      switchPlayer();
    }
  }
});

/**
 * a. Creating scoreElements,
 * b. adding .hidden class in css
 * c. adding hidden to the diceElement's classList.
 * d. logic for the dice https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648447#overview
 * e,f,g...
 * h. using toggle function
 */

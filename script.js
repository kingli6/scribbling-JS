'use strict';
/*
JavaScript DOM manupilation
https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648409#search

-Select a DOM object
document.querySelector(class item)

-Set a DOM object
document.querySelector('.message').textContent = 'COrrect Number!';

-Grab a value from the form
document.querySelector('.guess').value;
-set value 
document.querySelector('.guess').value = 23;

-Action trigger or EventListener

document.querySelector('.check').addEventListener('click', function(){
    console.log(document.querySelector('.guess').value);
    console.log(typeof guess); //<--a string
});
    //.check is a button. When clicked, function is run. 
*/
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'COrrect Number!';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '!!No number!';
  }
});

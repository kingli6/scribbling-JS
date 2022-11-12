'use strict';
/**Project 2 Modal Window
 *  https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648433#overview
 *
 *--- coding naming Convention---
 *  first-name // in html, class and id is named lowercase with - inbetween words
 *
 *
 *
 *
 * --Using querySelectorAll to select more than one element with the same
 * class. Otherwise, only the first one is selected
 *      document.querySelectorAll('.class-name)
 *
 * https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648441#overview
 *
 * --using fucntion without () so it doesn't run right away.
 *    Using function closeModal in the eventlistener
 *
 * --Seeing if a item has a certain class
 *      modal.classList.contains('hidden')
 *
 * --using esc to exit a layout
 * document.addEventListener('keydown', function (e)
 *
 */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const OpenModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', OpenModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
  //Or
  //if (e.key === 'Escape' && !modal.classList.contains('hidden'))
});

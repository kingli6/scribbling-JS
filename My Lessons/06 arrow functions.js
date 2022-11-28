'use strict';

console.log('Function declaration can be called before initialization');
let j = calcAge(1988, 2050);
console.log(j);

//FUnction declaration
function calcAge(year, willbe = 2022) {
  const now = 2022;
  if (willbe === 2022) {
    return now - year;
  } else {
    return willbe - year;
  }
}

// Function expression or annoymous function
const annonymous = function (year, willbe = 2022) {
  const now = 2022;
  if (willbe === 2022) {
    return now - year;
  } else {
    return willbe - year;
  }
};

console.log('Lilys age ' + annonymous(1960)); //62 years old

//notes
//Function in javascript is a value type.... So you can store it in a variable.

//https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648227#overview
//Arrow function
// const functionName = parameter => expression
const arrYear = year => 2022 - year;
console.log(arrYear(1988));

//if there's longer expression, you need curly bracers {} and return keyword.
const birthYear = age => {
  const now = 2022;
  return now - age;
};
console.log(birthYear(64));

//If you have multiple parameters, you use (year, retirement)

const retirementYear = (_birthYear, _name) => {
  return `You will retire in ${_birthYear + 65}, ${_name}`;
};
console.log(retirementYear(1988, 'joe'));

//Since the above is just one line
const retirementYear2 = (_birthYear, _name) =>
  `You will retire in ${_birthYear + 65}, ${_name}`;

console.log(retirementYear2(1988, 'joe'));

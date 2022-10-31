
let js = 'amazing';

// if (js == 'amazing') alert('JavaScript is FUn!')
// console.log(40 + 50 + 39 + 59)
const current_year = 2022
let language
console.log(language) // undefined
console.log(js, language)

//creating variables
// you can use var, let or const or no declaration of type when making variables
//- don't use var. var is dead. Use mostly const, and let only when you know that it will be changed.

const _j = 10
// _j = 20
// console.log(_j) //Uncaught TypeError: invalid assignment to const '_j'

joes_bday = current_year - 1988
console.log(joes_bday + 1, 'plus one', joes_bday - 1, 'another comment', 2 ** 3, '2**3')
console.log(typeof ('jj'), 'type of string')

let x = 1
x++;    //x+= 1
x += 10;
kiras_bday = current_year - 2018

const isFullAge = kiras_bday >= 4; //you get a boolean
console.log(isFullAge)

console.log(current_year - 1991 > current_year - 2018, 'result is 4 so True')
let some_bool = true


// // Coding challenge #1
// const mark_weight = 95
// const mark_height = 1.88
// const john_weight = 85
// const john_height = 1.76

// let bmi1 = mark_weight / mark_height ** 2
// let bmi2 = john_weight / john_height ** 2
// console.log('Marks bmi: ' + bmi1, 'Johns bmi: ', bmi2)
// if (bmi1 > bmi2)
//     console.log('Mark has a heigher BMI score')
// else
//     console.log('John has the higher BMI score')

//String template literals?
//https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648167#overview
const myName = 'Joe'
const myage = 2022 - 1988
let string_sentance = `I'm ${myName} and I'm ${myage} years old`
console.log(string_sentance)

//multipline strings 
console.log('string with \n\
multiple \n\
lines')
//with string literals
console.log(`strings with 
multiple sring leteral or
template literal?`)


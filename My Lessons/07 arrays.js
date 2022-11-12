'use strict';
//ARRAYS
//https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648259#overview

//push, unshift, pop, shift, indexof, include
//include will return true/false if the element exists in the array
//indexof() returns the index of the element
//shift, like pop, removes the first item in the array
//unshift adds element to the start of the array
//push adds elements to the end of the array

const friends = ['person1', 'person2', 'person3'];

console.log(friends.indexOf('person2')); //1
friends.shift();    //(3) ['person2', 'person3', 'person4']
friends.push('person4'); //returns the length of the array

console.log(friends);



//exercise2
const just_the_tip = cost => {
    let tip = 0
    if (50 > cost < 300) {
        tip = 0.15;
    }else tip = 0.2;
    return cost * tip;
}

const caltTip = cost => {
    return cost >= 50 && cost <= 300 ? cost * 0.15 : cost*0.2; 
}
console.log('tip calculator.........')
const bills = [125, 555, 44];
const tip = [caltTip(bills[1]), just_the_tip(bills[1])];
console.log(tip)


console.log('Exercise1........')
const calcAge = function(birthyear) {
    return 2022-birthyear;
}
const average = array => sum(array) / array.length;

const years = [1988, 1990, 1975];
const newArray =[]
for (let index = 0; index < years.length; index++) {
    newArray.push(calcAge(years[index]));
}
console.log(newArray);
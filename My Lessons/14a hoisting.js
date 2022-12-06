'use strict';
const jonas20 = {
  year: 1988,
  calcAge: function () {
    console.log(this + '<-- console logging "this" keyword');
    console.log('2022 - ' + this.year + ')this.year is: ' + (2022 - this.year));
    console.log(this.year);
  },
};
console.log('calculating Jonas age');
jonas20.calcAge();

//Creating a new object to test if this will refer to jonas or matilda. IT REFERS TO the
//object that is calling.
const matilda10 = {
  year: 2012,
};

//this is new to me! assigning a function from one object to the other.
//confusing that you should have .method name matilda10.calcAge...
matilda10.calcAge = jonas20.calcAge;
console.log('calling calcage on matilda....');
matilda10.calcAge();

//testing to assign the function inside jonas20 to a standalone variable. And see how this keyword reacts.
//this returns undefined.
console.log('\n\nwhats happening here?');
const f = jonas20.calcAge; //notice that you are not using().  () means to run it.
f(); //will produce undefined (cannot read property year)

//Testing some other stuff
console.log('\nTesting some other stufff.................');

const just_the_tip = cost => {
  //does this work? 100 < cost < 300 A. NOPE
  if (cost > 100 && cost < 300) {
    console.log(cost);
    return 'it works';
  } else {
    console.log('not sure');
    return 3696969;
  }
};

console.log(just_the_tip(299));

//https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648507#overview

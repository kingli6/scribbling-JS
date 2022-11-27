const jonas20 = {
  year: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
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

const f = jonas20.calcAge; //notice that you are not using().  () means to run it.
//f();    //will produce undefined (cannot read property year)

// Arrow function doesn't get this keyword. It will use the parent scope

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  greetNorm: function () {
    // console.log(this);
    console.log(this.firstName);
  },
  greetArrow: () => console.log(`Hey ${this.firstName}`),
};
console.log('function expression??');
jonas.greetNorm();
console.log('\nArrow fucntion');
jonas.greetArrow();

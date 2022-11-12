/*
method can be a property that holds a function value
VS CODE TIPS!
 alt double click on similar names has the same effect as ctrl + D 
 
Efficient programming
https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648275#overview
If a method gets called over and over again, a way to minimize that 
    is to store the result into the object. So you ask for the property,
    rather than needing to calculate everytime.

    Note: you need to activate that method which calculates and stores the new property
    before accessing it. i.e. you need to create it first.
*/
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher', 
    friends: ['Micheal', 'Peter', 'Steven'],
    canDrive: false,

    // calcAge: function(){
    //     // console.log(this);
    //     return 2022 - this.birthYear;
    // },
    calcBirthyear: function(){
        this.birth_year = 2022-this.age;
        return this.birth_year; 
    },
    friendsList: function(){
        this.friends.forEach(element => {
            console.log(element)
        });
    },
    getSummary: function () {
        return `${this.firstName} is a ${jonas.age} year old teacher, and he ${jonas.canDrive ? 'has '  : 'doest have '} a drivers license`
    }
};
jonas.calcBirthyear()
console.log(jonas.birth_year);

//Exercise
console.log(jonas.getSummary())
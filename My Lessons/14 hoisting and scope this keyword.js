//this keyword points to the object that's calling. here's an example
const jonas20 = {
  year: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};

const matilda10 = {
  year: 2012,
};

jonas20.calcAge();
// matilda10 = jonas20.calcAge();
console.log('calling calcage on matilda....');
matilda10.calcAge();

/*
this points to the class or object that's this is in. 
    without strict mode, this will point to the global variable. or the window function/method
    https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648501#overview time 2:50

    -arrow function don't get a 'this' keyword. this will use srrounding function (lexical this)
    -simple function call this will return undefined. (in strict mode, otherwise it will use the global variable(window(int the browser)))
    -event listner works! this will point to the DOM element that the handler is attached to.
--you can use instead new, call, apply, bind.... but I dont know how they work.
    IMPORTANT TAKE AWAYS
    -this done NOT point to the function itself, and also NOT its variable environtment...???

    
    *Hoisting?
    * To be able to have access to something before being declared. Like functions. 
    But not arrow functions or fucntion expression (const somename = function(var1, var2)return something;)
    * 
    Summary
    var will initiate but will return undifined if called early. var has a function scope. Meaning; allowed everywhere in a function.
    BEST PRACTIcE: Dont use VAR.
    const and let. They will give a uninitiated error if called earlier. Function expression and arrow function is also a const/let variable.
    BEST PRACTICE: Declare your variables/functions with const or let on the top, call them below.
    
    */

// BLOCK SCOPE (ES6/JS)
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648481#overview
//     -Variables are accessible only inside block (block scoped)
//     -However, this only applies to let and const variables.
//         var is accessible anywhere????? No. It is in a function. It is function-scoped...
//             https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648487?start=0#overview
//             time stamp 12:40
//     -Functions are also block scoped (only in 'strict mode';)   timestamp 6:30 or vid 93, time 14:15
//         does this mean otherwise, you have access?

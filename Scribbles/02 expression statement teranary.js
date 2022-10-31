// ternary operator (it has three parts!) 
//      it's also called a conditional operator..

//if this ? do this : else do this
cond = 20;
cond > 10 ? console.log('its greater than 10'):console.log('its not greater than 10');

//faster way?
console.log(cond === 20 ? 'its 20' : 'its not 20')

//expression and statements. 
    //in console.log, you can place expressions. 
console.log(`You can have expression in here ${cond === 20 ? 'its 20' : 'its not 20'}`)
//https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648205#overview

//EXERCISE
// let tip1 = 0;
// let bill1 = 400;
// // 50 -300 its 15% else its 20%
// console.log(`Here's the bill: ${bill1}kr. The tip becomes ${bill1 > 50 && bill1 < 200 ? 400 + 400*0.15 : '20%'}`)

//Version 2 (using off const is better. Less logic on console log is better...)
//EXERCISE
const bill = 300;
const tip = bill > 50 && bill < 200 ? bill*0.15 : bill*0.20;
// 50 -300 its 15% else its 20%
console.log(`Here's the bill: ${bill}kr. The tip becomes ${tip}. 
Total ${bill + tip}kr`)

/*
- skipping switch statemennts https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648197#overview
- Importance of knowing where a expression and a statement can be used, so you need to know what a expression
    and a statement is. 
        -statement is when you are stating something x = y. It doesn't produce anthing
        -expression produces. 3 + 6, 
            cond === 20 ? 'its 20' : 'its not 20'       <- ex of a expression

https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648209#overview
- Creation of javascript, ECMA a independent standardizing company set standards to javascript so it can be used 
    eveywhere on the web browser. THAT standardised javaScript was called ECMAScript or ES1
    ECMAScript or ES1
- ES1 got an update on 20015 and is called ES6  //the biggest update to the language ever!
- there's annual releases for ECMAScript or ES2016, ES2017 till the end of time. According to this guys, it's ES2089. How old will i be? 
- JS or ES is backword compatible!
*/

end = 2089
now = 2022
myage = 33

yearsLeft = end - now
IwillBe = myage + yearsLeft
console.log(`We have ${yearsLeft}, I will be${IwillBe}. Kira will be${4+yearsLeft}`)
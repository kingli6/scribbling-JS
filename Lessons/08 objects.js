/*Objects
.age, [age]         items can be reached with
You can use the above method to add item.
string.split(' ')    splits the string into array where it has ' ' space...
.length-1             to find last item in a array++
                        array.at(-1) works from ES2022
//Can i get the key by naming the value in an object?????
*/
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher', 
    friends: ['Micheal', 'Peter', 'Steven']
};

//people can do this to reach the item.
const nameKey = 'Name';
console.log(jonas['first'+nameKey]);    

console.log(jonas.age) 
console.log(jonas['age']) 

//challenge https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648271#overview
promtNumber = 3;
stringS = 'Jonas has 3 friends, and his best friend is called Michael';
toArray = stringS.split(' ');
// lastword = toArray[toArray.length-1]
lastword = toArray.at(-1)   //From ES-2022
jonas.best_friend = lastword
console.log(jonas.best_friend)

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)
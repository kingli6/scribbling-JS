// const Koalas = [98, 110, 81];
// const Dolphins = [98, 110, 87];
// let sum = 0;
// let avgScore_Dolphins = 0;
// let avgScore_Koalas = 0;

// function findAverage(scores) {
//     scores.forEach(element => {sum += element});
//     return sum/scores.length;

//     // scores.forEach(function(num) {sum += num});
//     // return sum /scores.length;

//     // scores.forEach((num) => { sum += num});      //not sure if this is working
//     // return sum / scores.length;

//     // return scores.reduce((x,y) => (x + y)/scores.length)
    
//     // for (let k of scores) {                                //!!!made a mistake here. had in... should be of!
//     //     sum += k;
//     // }
//     // return sum/scores.length;
//}
avgScore_Dolphins = findAverage(Dolphins);
avgScore_Koalas = findAverage(Koalas);
console.log(`Dolphins: ${avgScore_Dolphins}, Koalas ${avgScore_Koalas}`);
/*
above 100 to win
dophin/koalas
draw
*/
if (avgScore_Dolphins > 100 && avgScore_Koalas > 100) {
    console.log('both are above 100');
} else if (avgScore_Dolphins > 100 && avgScore_Koalas < 100){
    console.log('Dolphins win');
} else if (avgScore_Dolphins === avgScore_Koalas) {
    console.log('both scored the same!');
} else {
    console.log('Koalas win');
}

// const arr = [1, 2, 3, 4, 5];
// const average = arr.reduce((a, b) => a + b, 0) / arr.length;
// console.log(average);

// const numbers = [1, 2, 3, 4]
// const sum = numbers.reduce(function(x, y) { return x + y }, 0)

// console.log(sum)


// reduce(function(previousValue, currentValue) 
// { /* actions */}, initialValue)


//NOTES
/*
reduce, forEach, for (var item of array)
Trying to learn average function, but ended up learning forEach, which is hard!

Getting weird results..
Dolphins: 98.33333333333333, Koalas 194.66666666666666
                    const Koalas = [98, 110, 81];
                    const Dolphins = [98, 110, 87];
*/
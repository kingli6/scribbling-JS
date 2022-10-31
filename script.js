'use strict';

const sum = function (array) {
    let num = 0;
    array.forEach(item => num += item)
    return num

}
const average = array => sum(array) / array.length;

function checkWinner(data1, data2) {
    if (average(data1) > average(data2)) {
        console.log('data1 wins')
    } else if (average(data1) < average(data2)) {
        console.log('data2 wins')
    } else { 'draw' }
}

checkWinner([85, 54, 41], [23, 34, 27]);
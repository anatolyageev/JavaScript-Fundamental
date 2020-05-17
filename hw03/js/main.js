//task1

function sumMin(array2D) {
    let sum = 0;
    array2D.forEach(element => {
        sum += Math.min(...element);
    });
    return sum;
}

console.log(sumMin([[1, 2, 3], [33, 22, 55], [16, 42, 345, 79, 1]]));
console.log(sumMin([[11, 2], [323, 2, 55]])); //2 + 2 = 4 
console.log(sumMin([[13, 11, 2], [3, 23, 23, 55], [23, 55, 3, 77], [39, 7, 89, 94]])); //2 + 3 + 3 + 7 = 15 

//Task2

function twoOldestAges(array) {
    let result = [];
    array.sort((a, b) => (a - b));
    result.push(array[array.length - 2], array[array.length - 1]);
    return result;
}
console.log(twoOldestAges([1, 2, 10, 8, 4, 6, 7]));

//Task3

function shortestWord(strinArray) {
    return Math.min(...strinArray.split(' ').map(item => item.length));
}

console.log(shortestWord("bitcoin take over the world maybe who knows perhaps"));
console.log(shortestWord("turns out random test cases are easier than writing out basic ones"));
console.log(shortestWord("lets talk about javascript the best language"));
console.log(shortestWord("i want to travel the world writing code one day"));
console.log(shortestWord("Lets all go on holiday somewhere very cold"));

//Task4

console.log("Thi1s".match(/\d/)[0]);
console.log("one two 100".match(/\d+/));

function wordOrder(str) {
    return str.split(' ').sort((a, b) => a.match(/\d/)[0] - b.match(/\d/)[0]);
}

console.log(wordOrder("is2 Thi1s T4est 3a"));
console.log(wordOrder("4of Fo1r pe6ople g3ood th5e the2"));

//Task5

function changeStyle() {
    var circle = document.getElementById("circle");
    var newColor = document.getElementById("backgroundColor").value;
    var widthHeight = document.getElementById("width-height").value;
    console.log(newColor);
    console.log(widthHeight);
    circle.style.background = newColor;
    circle.style.width = widthHeight + "em";
    circle.style.height = widthHeight + "em";
} 
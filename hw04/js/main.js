//Task1

function meeting(arr, chairNeeded) {
    if (chairNeeded == 0) {
        return 'Game On';
    }
    let counter = 0;
    let resultArr = [];
    for (let element of arr) {
        let delta = element[1] - element[0].length;
        if (delta <= 0) {
            resultArr.push(0); continue;
        }

        counter += delta;

        resultArr.push(delta);
        if (counter == chairNeeded) {
            break;
        }
    }
    return counter < chairNeeded ? 'Not enough!' : resultArr;
}

console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5));
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));

//Task 2===================================================================

function ticTacToeChecker(feald) {
    const x = 1;
    const o = 2;

    if (checkDiagonals(feald, x) || checkLines(feald, x)) {
        return 1;
    }
    if (checkDiagonals(feald, o) || checkLines(feald, o)) {
        return 2;
    }
    if (emptySlots(feald)) {
        return -1;
    }
    return 0;
}

function emptySlots(feald) {
    let result = true;
    feald.forEach(element => {
        result = element.includes(0);
    });
    return result;
}

function checkDiagonals(feald, side) {
    let mainDiagonal = true;
    let secondDiagonal = true;
    let size = feald.length;
    for (let i = 0; i < size; i++) {
        mainDiagonal &= (feald[i][i] == side);
        secondDiagonal &= (feald[size - i - 1][i] == side);
    }

    if (mainDiagonal || secondDiagonal) {
        return true;
    }
    return false;
}

function checkLines(feald, side) {
    let col = true;
    let row = true;
    for (let i = 0; i < feald.length; i++) {
        col = true;
        row = true;
        for (let j = 0; j < feald.length; j++) {
            col &= (feald[i][j] == side);
            row &= (feald[j][i] == side);
        }
        if (col || row) {
            return true;
        }
    }
    return false;
}

console.log(ticTacToeChecker([[0, 0, 1],
    [0, 1, 2],
    [2, 1, 0]]
   ));

   console.log(ticTacToeChecker([[1, 1, 1],
    [0, 1, 2],
    [2, 1, 0]]
   ));
   console.log(ticTacToeChecker([[1, 2, 2],
                                 [2, 2, 1],
                                 [2, 1, 2]]
) + " should be 2");

   console.log(ticTacToeChecker([[1, 2, 2],
                                 [2, 1, 1],
                                 [2, 1, 2]]
   ) + " should be 0");

   // Task3==============================================================

   function pop(arr){
       let result = arr[arr.length-1];
       arr.length = arr.length-1;
       return result;
   }

   let arr = [1,2,3,4];
   console.log(arr);
   console.log(pop(arr));
   console.log(arr);

   function push(arr,value){
       arr[arr.length] = value;
   }
   
   push(arr,10);
   console.log(arr);
   push(arr,12);
   console.log(arr);

   function shift(arr){
    let result = arr[0];
    let tempArr = [];
    for (let index = 1; index < arr.length; index++) {
         tempArr[index-1] = arr[index];
    }
    arr = tempArr;
    //??????
    return result;
}
let arr1 = arr.slice();
console.log(arr1);
console.log(shift(arr1));
console.log(arr1);

function unshift(arrv,value){ 
    let tempArr = [];
    tempArr[0]=value;

    for (let index = 0; index < arrv.length; index++) {
         tempArr[index+1] = arrv[index];
    }
    return tempArr;
}
console.log(arr1);
arr1 = unshift(arr1,22);
console.log(arr1);

function concat(arr1,arr2){
    let arr1Lenght = arr1.length;
    for (let index = 0; index < arr2.length; index++) {
        arr1[arr1Lenght+index] = arr2[index];
    }
}

let arr3 = [1,2,3,4,5];
let arr4 = [6,7,8,9,10];
concat(arr3,arr4);
console.log(arr3);
//Task1

function DNA_strand(str) {
    let result = "";
    for (let char of str) {
        result += deMux(char);
    }
    return result;
}

function deMux(char) {
    switch (char) {
        case 'A':
            return 'T';
            break;
        case 'T':
            return 'A';
            break;
        case 'C':
            return 'G';
            break;
        case 'G':
            return 'C';
            break;
        default:
            break;
    }
}

console.log(DNA_strand("ATTGC"));
console.log(DNA_strand("GTAT"));

//Task2.1

let dozens = new Map();
dozens.set(2, 'двадцать')
    .set(3, 'тридцать')
    .set(4, 'сорок')
    .set(5, 'пятьдесят')
    .set(6, 'шестьдесят')
    .set(7, 'семьдесят')
    .set(8, 'восемьдесят')
    .set(9, 'девяносто');

let units = new Map();
units.set(1, 'один')
    .set(2, 'два')
    .set(3, 'три')
    .set(4, 'четыре')
    .set(5, 'пять')
    .set(6, 'шесть')
    .set(7, 'семь')
    .set(8, 'восемь')
    .set(9, 'девять');

let digitsSecondDec = new Map();
digitsSecondDec.set(10, 'десять').set(11, 'одинадцать')
    .set(12, 'двенадцать')
    .set(13, 'тринадцать')
    .set(14, 'четырнадцать')
    .set(15, 'пятнадцать')
    .set(16, 'шестнадцать')
    .set(17, 'семнадцать')
    .set(18, 'восемнадцать')
    .set(19, 'девятнадцать');


function digitInWords(digit) {
    if (digit < 20) {
        return digitsSecondDec.get(digit);
    }
    let doz = ~~(digit / 10);
    let un = digit % 10;
    return dozens.get(doz) + " " + units.get(un);
}

//Task 2.2

function stringInfo(str) {
    let arr = str.split("");
    console.log(arr);
    let countChars = arr.reduce((result, el) => {
        if (el.match(/[a-zA-Z]/)) {
            result += 1;
        }
        return result;
    }, 0);
    let countDigits = arr.reduce((result, el) => {
        if (el.match(/\d/)) {
            result += 1;
        }
        return result;
    }, 0);
    return "Characters: " + countChars +
        "\nDigits: " + countDigits +
        "\nOther: " + (str.length - (countChars + countDigits));
}
console.log(stringInfo('som5e stri4ng!'));

//Task 2.3
function convertString(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/\d/)) {
            result += "_";
        } else if (str[i] == str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else if (str[i] == str[i].toLowerCase()) {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(convertString('sOm5e7sI ri4Mg!'));

//Task3





//Task4
function reduceAsMap(arr) {
    return arr.reduce((result, el) => {
        result.push(el[0]);
        return result;
    }, []);
}

console.log(reduceAsMap(['Яблоко', 'Банан', 'Ананас']));

function reduceAsFilter(arr) {
    return arr.reduce((result, el) => {
        if (el == 'Ананас') {
            result.push(el);
        }
        return result;
    }, []);
}

console.log(reduceAsFilter(['Яблоко', 'Банан', 'Ананас']));

function reduceAsForEach(arr) {
    return arr.reduce((result, el, index) => {
        result.push(`${index + 1}: ${el};`);
        return result;
    }, []);
}

console.log(reduceAsForEach(['Яблоко', 'Банан', 'Ананас']));
// Big task 1 functions
const RASHOD_KRASKI = 16;
const PaintCalc = (l, w, h) => (l * h * 2 + w * h * 2) / RASHOD_KRASKI;
// const PaintCalc = (l,w,h) => 2*h*(l+w); // 2 2 2 => 44 ???

// Big task 2 functions 

function initData() {
    for (let index = 0; index < 3; index++) {
        let value = prompt(`Enter A${index + 1} price from 0 to 100`);
        if (+value > 100 || +value <= 0) {
            return alert("Please enter correct data");
        }
        prices.push(+value);
    }
    for (let index = 0; index < 3; index++) {
        let value = prompt(`Enter B${index + 1} cupacity price from 0 to 100`);
        if (+value > 100 || +value <= 0) {
            return alert("Please enter correct data");
        }
        buckets.push(+value);
    }
}

const benefit = function (prices, buckets) {
    return Math.max(...prices) * buckets.reduce((a, b) => +a + b, 0);
}

//big task 3 functions
const luckyNumCheck = function (lukyNum) {
    if (lukyNum == 0) {
        return true;
    } else if (lukyNum < 1000) {
        return false;
    } else {
        return calculateLacky(lukyNum);
    }
}

const calculateLacky = function (num) {
    let righNum = digitToArray(num % 1000);
    let leftNum = digitToArray(~~(num / 1000));
    return Math.max(...righNum) == Math.max(...leftNum);
}

const digitToArray = function (num) {
    let arr = [];
    let digit = +num;
    while (digit > 0) {
        arr.push((digit % 10));
        digit = Math.floor(digit / 10);
    }
    return arr;
}

//fuction for task 4.1
function WhoYouAre(age) {
    if (age > 60) {
        return "pensioner";
    } else if (age <= 60 && age > 18) {
        return "adult";
    } else if (age <= 18 && age > 12) {
        return "teen";
    } else if (age <= 2 && age > 0) {
        return "baby";
    } else {
        return "child";
    }
}

//fuction for task 4.2
const SignDcoder = function (digit) {
    let result;
    switch (+digit) {
        case 1:
            result = "!";
            break;
        case 2:
            result = "@";
            break;
        case 3:
            result = "#";
            break;
        case 4:
            result = "$";
            break;
        case 5:
            result = "%";
            break;
        case 6:
            result = "^";
            break;
        case 7:
            result = "&";
            break;
        case 8:
            result = "*";
            break;
        case 9:
            result = "(";
            break;
        case 0:
            result = ")";
            break;

        default:
            break;
    }
    return result;
}

//fuction for task 4.3
const sameDigits = function (number) {
    const digits = number.split('');
    if (digits[0] == digits[1] || digits[0] == digits[2] || digits[1] == digits[2]) {
        return true;
    }
    return false;
}

//fuction for task 4.4
const leapYear = function (year) {
    if (year % 100 == 0) {
        return false;
    } else if (year % 400 == 0 || year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

//fuction for task 4.5
const palindrome = function (num) {
    const arr = num.split('');
    if (+arr[0] == +arr[4] && +arr[1] == +arr[3]) {
        return true;
    } else {
        return false;
    }
}

const CURRENT_USD_EUR = 0.92;
const CURRENT_USD_UAN = 26.69;
const CURRENT_USD_AZN = 1.70;

//fuction for task 4.6
const converter = function (sumUSD, currency) {
    let result = 0;
    switch (currency) {
        case "EUR":
            result = sumUSD * CURRENT_USD_EUR;
            break;
        case "UAN":
            result = sumUSD * CURRENT_USD_UAN;
            break;
        case "AZN":
            result = sumUSD * CURRENT_USD_AZN;
            break;
        default:
            break;
    }
    return result;
}

//fuction for task 4.7
const discount = function (sumTotal) {
    if (+sumTotal >= 500) {
        return sumTotal - sumTotal * 0.07;
    } else if (sumTotal >= 300 && sumTotal < 500) {
        return sumTotal - sumTotal * 0.05;
    } else if (sumTotal >= 200 && sumTotal < 300) {
        return sumTotal - sumTotal * 0.03;
    }
    else {
        return sumTotal;
    }
}

//fuction for task 4.8
const circleToSqure = function (circleLength, perimetrSqure) {
    let radius = circleLength / 2 * Math.PI;
    let side = perimetrSqure / 4;

    if ((side / 2) >= radius) {
        return true;
    }
    return false;
}


//fuction for task 4.9



//Task 1
let L = prompt('Enter L');
let W = prompt('Enter W');
let H = prompt('Enter H');

if (L > 1000 || W > 1000 || H > 1000) {
    alert("To big please enter less or eaquls 1000 m");
} else if (!!!L || !!!W || !!!H) {
    alert("Please enter all needfull data");
} else {
    alert(`Yoy will need ${PaintCalc(L, W, H)} cans`);
}

//Task2
let buckets = [];
let prices = [];
initData();
alert(`Yoy will have ${benefit(prices, buckets)} rubls`);

//Task3

let lukyNum = prompt('Enter number of yours tiket');
if (+lukyNum >= 0 && +lukyNum < 10 ** 6) {
    alert(`lukyNum is ${luckyNumCheck(lukyNum)}`);
} else {
    alert("Please enter correct data");
}


//Task4
//Task4.1 Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2),
//  подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

let age = prompt('Enter your age');

if (age >= 0 && age < 120) {
    alert(`Your are ${WhoYouAre(age)}`);
} else {
    alert(`Age not correct`);
}

//Task4.2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который
// расположен на этой клавише (1–!, 2–@, 3–# и т. д).
let digit = prompt('Enter digit from 0 to 9');
if (+digit >= 0 && digit < 10) {
    alert(`Sign ${SignDcoder(digit)}`);
} else {
    alert(`Need digit from 0 to 9`);
}

//Task4.3. Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.
let num = prompt('Enter number from 100 to 999');
alert(`Same digits ${sameDigits(num)}`);

//Task4.4. Запросить у пользователя год и проверить, високосный он или нет. 
// Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

let year = prompt('Enter year');
alert(`Leap year ${leapYear(year)}`);

//Task4.5. Запросить у пользователя пятиразрядное число и определить, является ли  оно палиндромом.

let polNum = prompt('Enter five digit number.');
alert(`Is it polindrome ${palindrome(polNum)}`);

//Task4.6. Написать конвертор валют. Пользователь вводит количество USD, выбирает,
// в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let sumUsd = prompt('Enter sum in USD.');
let currency = prompt('Enter currency EUR, UAN or AZN.');
alert(`You will get  ${converter(sumUsd, currency)} ${currency}`);

// Task4.7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
// от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
let sumTotal = prompt('Enter total sum.');
alert(`Price with discount ${discount(sumTotal)}`);

// 8. Запросить у пользователя длину окружности и периметр квадрата.
//  Определить, может ли такая окружность поместиться в указанный квадрат.

let circleLength = prompt('Enter circleLength.');
let perimetrSqure = prompt('Enter perimetrSqure.');
alert(`Is circle fit to squre -  ${circleToSqure(circleLength, perimetrSqure)}`);

//  9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За  каждый правильный 
//  ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

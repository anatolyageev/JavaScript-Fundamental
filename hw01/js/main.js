const CURRENT_YEAR =2020;
const CURRENT_USD_EUR =0.92;
const MEGABITE_IN_GIGABITE =1024;

// 1. Запросите у пользователя его имя и выведите в ответ:
// «Привет, его имя!».

let name = prompt('Enter you name' );
alert("Hello " + name);
console.log(`Hello, ${name}`);


// 2. Запросите у пользователя год его рождения, посчитайте, 
// сколько ему лет и выведите результат. Текущий год укажите
//  в коде как константу.

let beathday = prompt('Enter your year of birth');
alert("Your age is " + (CURRENT_YEAR-beathday));

// 3. Запросите у пользователя длину стороны квадрата и выведите
//  периметр такого квадрата.

let a = prompt('Enter the length of the sides of the square');
alert("Square perimeter " + (a*4));

// 4. Запросите у пользователя радиус окружности и выведите 
// площадь такой окружности.

let radius = prompt('Enter circle radius');
alert("Circle area " + (Math.PI*radius**2).toFixed(3));

// 5. Запросите у пользователя расстояние в км между двумя
//  городами и за сколько часов он хочет добраться.
//  Посчитайте скорость, с которой необходимо двигаться, 
// чтобы успеть вовремя.

let distance = prompt('Enter distance in km between two cities');
let hours = prompt('Enter time in hours');
alert("Needful speed: " + ~~(distance/hours) + " km/h");

// 6. Реализуйте конвертор валют. Пользователь вводит доллары,
//  программа переводит в евро. Курс валюты храните в константе.

let usd = prompt('Enter dollars');
alert("You will have " + (usd*CURRENT_USD_EUR) +" EUR");

// 7. Пользователь указывает объем флешки в Гб. Программа должна 
// посчитать сколько файлов размером в 820 Мб помещается на флешку

let capacity = prompt('Enter capacity of flash drive');
alert("You can put you file " + Math.floor(capacity*MEGABITE_IN_GIGABITE/820) +" times");


// 8. Пользователь вводит сумму денег в кошельке и цену одной
//  шоколадки. Программа выводит сколько шоколадок может купить
//  пользователь и сколько сдачи у него останется.

let sum = prompt('Enter money amount');
let price = prompt('Enter price of chocolates');
let chocolatesAmount = Math.floor(sum/price);
let change = (sum - chocolatesAmount*price).toFixed(2);
alert("You can buy " + chocolatesAmount +" chocolates. And your cange is " + change );

// 9. Запросите у пользователя трехзначное число и выведите 
// его задом наперед. Для решения задачи вам понадобится 
// оператор % (остаток от деления).

let digit = prompt('Enter three-digit number');
let result = "";
while(digit>0){
result = result.concat(digit%10);
console.log(result);
digit = Math.floor(digit/10);
console.log(digit);
}
alert("Result: " + result);


'use strict';
let color = 'Blue';

console.log('Hello! I\'m Yuta Nakamura');
console.log("Hello! I'm Yuta Nakamura");
console.log('こんにちは！"中村裕太"さん');
console.log('\¥ \t AAA \n BBB');
console.log('Hello');
console.log("Hello");

console.log(color);

color = 'Red'
console.log(color);

let myColor = 'Blue'
console.log(myColor);

//定数
//中の値を後から変えることができない

const PI = 3.14;
console.log(PI);

const TAX_RATE = 10;
console.log(TAX_RATE);

//代入時にデータ型が決まる（動的型付け言語）

let myName = 'Nakamura';
let num = 123;
let dec = 123.456;

console.log(myName);
console.log(num);
console.log(dec);

console.log(typeof myName);
console.log(typeof num);
console.log(typeof dec);

myName = 456;
console.log(myName);
console.log(typeof myName);

let ans = 1 + 2;
console.log(ans);

let i = 20;
let j = 10;
let ans1 = i + j;
console.log(ans1);

let ans2 = i - j;
console.log(ans2);

let ans3 = i * j;
console.log(ans3);

let ans4 = i / j;
console.log(ans4);

let x = 3;
let y = 2;
let ans5 = x / y;
console.log(ans5);

let ans6 = x % y;
console.log(ans6);


let ans7 = Math.pow(x, y);
console.log(ans7);

let ans8 = x ** y;
console.log(ans8);

let ans9 = x * x;
console.log(ans9);

let lastName = 'なかむら';
let firstName = 'ゆうた';
let message1 = 'こんにちは' + lastName + '' + firstName + 'さん';
console.log(message1);

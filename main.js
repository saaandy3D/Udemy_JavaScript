'use strict';
/*
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

let message2 = `こんにちは ${lastName} ${firstName} さん
JavaScriptの学習を始めましょう！`;
console.log(message2);

let num0 = 20;
num0 = num0 + 10;
console.log(num0);

let num1 = 20;
num1 += 10;
console.log(num1);

let num2 = 20;
num2 -= 10;
console.log(num2);

let num3 = 20;
num3 *= 10;
console.log(num3);

let num4 = 20;
num4 /= 10;
console.log(num4);


//演習問題

let weight = 60;
let height = 1.7;

let bmi = weight / (height * height);
console.log(bmi); 

let num = 10 ;
num++;
console.log(num);

num--;
console.log(num);

let temperature = 29;
if (temperature > 28) {
	console.log('冷房稼働!');
}

console.log(29 > 28);
console.log(20 > 28);

//以上
let a = 100;
if (a >= 100) {
	console.log('100以上');
}
//より大きい
let b = 101;
if (b > 100) {
	console.log('100より大きい');
}
//以下
let c = 100;
if (c <= 100) {
	console.log('100以下');
}
//未満
let d = 99;
if (d < 100) {
	console.log('100未満');
}
//等しい
let e = 100;
if (e == 100) {
	console.log('100と等しい');
}
//等しくない
let f = 111;
if (f != 100) {
	console.log('100と等しくない');
}
// if / else
let g = 50;
if (g >= 100) {
	console.log('100以上');
} else {
	console.log('100以上では無い');
}

//例題
// if /else if / else

let x = 60;

if (x >= 90) {
	console.log('A');
} else if (x >= 80 ){
	console.log('B');
} else if (x >= 60) {
	console.log('C');
} else {
	console.log('D');
}

let birthYear = '2000';
let age = 18;
console.log(birthYear + age);
console.log(age + birthYear);

console.log(Number(birthYear) + age);
console.log(Number('Nakamura') + age);

console.log(age + '歳');
console.log(String(age) + '歳');

let b = true;
if (b){
	console.log('はい');
} else {
	console.log('いいえ');
}

console.log(!b)

let num = 100; //数値型
let str = '100'; //文字列型

if (num == str) {
	console.log('同じ');
} else {
	console.log('同じではない')
}

if (num === str) {
	console.log('同じ');
} else {
	console.log('同じではない')
}

//演習問題
//①
let weight = 60;
let height = 1.7;
let bmi = weight / (height * height);
console.log(bmi)
//②
if (bmi >= 25) {
	console.log('肥満');
} else if (bmi >= 18.5) {
	console.log('普通');
} else {
	console.log('痩せ');
}

// && 論理AND
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
// || 論理OR
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
// ! 論理NOT
console.log(!true);
console.log(!false);
// ! && ||
console.log(false && true || true);
console.log(false && (true || true));

//例題
let hasDriversLicence = true;
let hasGoldLicence = true;

if (hasDriversLicence && hasGoldLicence){
	console.log('あなたは優良ドライバーです');
}

//例題
let num = 12;
if (num % 2 === 0) {
	if (num % 3 === 0) {
		console.log(`${num}は、2の倍数、かつ、3の倍数です`);
	} else {
		console.log(`${num}は、2の倍数ではあるが、3の倍数ではないです`);
	}
} else if (num % 3 === 0) {
	console.log(`${num}は、2の倍数ではないが、3の倍数です`);
} else {
	console.log(`${num}は、2の倍数でも3の倍数でもないです`);
}

if ((num % 2 === 0) && (num % 3 === 0)) {
	console.log(`${num}は、2の倍数、かつ、3の倍数です`);
}

//例題
let num = 3 ;
switch(num) {
	case 1:
	  console.log('金賞');
	  break;
	case 2:
	  console.log('銀賞');
	  break;
	case 3:
	  console.log('銅賞');
	  break;
	case 4:
	  console.log('4位');
	  break;
	case 5:
	  console.log('5位');
	  break;
	default:
	  console.log('選外');
	  break;
}

//演習問題

//let num = 4
let num = Math.floor(Math.random() * 5 + 1);
// 		     Math.random() * (max - mini + 1) + min; 
console.log(num);
switch(num) {
	case 1:
	  console.log('大吉');
	  break;
	case 2:
	  console.log('中吉');
	  break;
	case 3:
	  console.log('小吉');
	  break;
	case 4:
	  console.log('吉');
	  break;
	case 5:
	  console.log('区');
	  break;
	default:
	  console.log('想定外の数値です。');
	  break;
}

//undefined 未定義。変数を宣言したが、値は代入していない状態。
let x;
console.log(x);

//null 変数は定義されているが、該当するあたいが無い状態。
let item = null;
console.log(item);

if (x === undefined) {
	console.log('undefinedです');
}
if (item === null) {
	console.log('nullです');
}

//三項演算子 条件式 ? trueの場合 : falseの場合
let age = 19
let beverage = ( age >= 20 ) ? 'ビール' : 'コーラ';
console.log(beverage);
*/

//例題 四角形の面積
function getRectangle(height, width) { //引数
	return height * width; //戻り値
}

console.log(getRectangle(3, 5));



'use strict';

//class属性を追加・更新（赤）
let setRedClassButton = document.getElementById('setRedClassButton');
setRedClassButton.addEventListener('click', function(e){
	let showText = document.getElementById('showText');
	showText.setAttribute('class', 'red');
}, false); 

//class属性を追加・更新（青）
let setBlueClassButton = document.getElementById('setBlueClassButton');
setBlueClassButton.addEventListener('click', function(e){
	let showText = document.getElementById('showText');
	showText.setAttribute('class', 'blue');
}, false);

//属性の削除
let removeClassButton = document.getElementById('removeClassButton');
removeClassButton.addEventListener('click', function(e){
	let showText = document.getElementById('showText');
	showText.removeAttribute('class');
}, false);


/*
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
	//IDによるノードの取得
	let inputColorName = document.getElementById('inputColorName');
	//取得したinput要素の入力値を取得
	let colorNameText = inputColorName.value;
	//取得したinput要素のname属性値を取得
	let inputName = inputColorName.getAttribute('name');
	//idがshowTextのp要素を取得
	let showText = document.getElementById('showText');
	//出力
	showText.textContent = `name属性: ${inputName}, 入力されたテキスト: ${colorNameText}`;
}, false);

/*
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
	let headerTitle = document.getElementById('headerTitle');
	//テキストの置換
	headerTitle.textContent = 'タイトルが変更されました';
}, false);

/*
let color = 'Blue';
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
	//alert('clicked!');
	//IDによるノード (要素) の取得
	let headerTitle = document.getElementById('headerTitle');
	console.log(headerTitle);
	//コンテンツの取得 (テキストの取得)
	console.log(headerTitle.textContent);
}, false);

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

//例題 四角形の面積

function getRectangle(height, width) { //引数
	return height * width; //戻り値
}
console.log(getRectangle(3, 5));

const getRectangle = function(height, width) {
	return height * width;
}
console.log(getRectangle(3, 5)); 

const getRectangle
	= new Function('height', 'width', 'return height * width');
console.log(getRectangle(3, 5)); 

const getRectangle = (height, width) => {
	return height * width;
}
console.log(getRectangle(3, 5));

//演習問題

let tax = 10
function getTotal(price, piece) {
	return price * piece + ((tax / 100) * price *piece);
}
console.log(getTotal(100, 22));

const displayMessage = function() {
	console.log('Timeout!');
}
setTimeout(displayMessage, 3000);

function greeting(name) {
	console.log('Hello!' + name + '-san.');
}
function inputUserName(callback) {
	let name = prompt('あなたのお名前を入力してください!');
	callback(name);
}
inputUserName(greeting);

let colors = ['Red', 'Green', 'Blue'];
console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]); // undefined

console.log(colors.length);

console.log(colors[colors.length - 1]);

//データ型
let arr = [1, '2', 3, ['a', 'b', 'c']];
console.log(arr);

//からの配列
let emptyArr = [];
console.log(emptyArr);

let colors = ['Red', 'Green', 'Blue'];
console.log(colors);

//末尾に追加
colors.push('Black');
console.log(colors);
//先頭に追加
colors.unshift('White');
console.log(colors);
//値の更新
colors[1] = 'Aka';
console.log(colors);

//指定した位置に1つ以上の値の挿入
let insertArr = ['a', 'b', 'c'];
insertArr.splice(1, 0, 'D', 'E', 'F');
console.log(insertArr);
//指定した位置から削除
insertArr.splice(1, 2);
console.log(insertArr);

//結合
let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
let mergedArr = arr1.concat(arr2);
console.log(mergedArr);
console.log(arr1);
console.log(arr2);

//先頭の削除
let arr3 = ['a', 'b', 'c', 'd'];
arr3.shift();
console.log(arr3);
//末尾を削除
arr3.pop();
console.log(arr3);

//例題
let user = new Object();
user.name = 'Taro Yamada';
user.gender = 'man'
user.birthYear = 1990;
console.log(user)

//オブジェクト初期化子
let user = { name: 'Taro Yamada', gender: 'man' , birthYear: 1990};
console.log(user);
//ドット記法
console.log(user.name);
console.log(user.gender);
console.log(user.birthYear);
//ブラケット記法
console.log(user['name']);
console.log(user['gender']);
console.log(user['birthYear']);

//個数
console.log(Object.keys(user).length);

//プロパティ（key）を取得
let keys = Object.keys(user);
console.log(keys);

//追加
//user.prefecture = 'Kanagawa';
user['prefecture'] = 'Kanagawa';
console.log(user);

//値の書き換え
//user.prefecture = 'Chiba';
user['prefecture'] = 'Chiba';
console.log(user);

//結合
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { d: 4, e: 5, f: 6 };
let mergedObj = Object.assign(obj1, obj2);
console.log(mergedObj);
//obj1にもobj2の内容が追加される

//空のオブジェクト
let person = {};
console.log(person);

//例題
let user = {
	name: 'Taro Yamada',
	gender: 'man',
	birthYear: 1990,
	calcAge: function(thisYear) {
		return thisYear - this.birthYear;
				//thisはこのメソッドの事を指していているので、このメソッド内のbirthYearを取得できる。
	}
}
console.log(user.calcAge(2022));

// 例題
for(let i = 1; i <= 3; i++) {
	console.log(i);
}

let arr = ['a', 'b', 'c']
for(let j = 0; j < arr.length; j++) {
	console.log(arr[j]);
}
*/

/*for(let i = 0; i < 3; i++) {
	for(let j = 0; j < 3; j++) {
		console.log(`i: ${i}, j: ${j}`);
	}
}

//例題
const scores = [
	[100, 99, 98],
	[90, 89, 88],
	[80, 79, 78]
];
//console.log(scores[0][0]);
//console.log(scores[0][1]);
//console.log(scores[0][2]);
//console.log(scores[1][0]);
//console.log(scores[1][2]);
//console.log(scores[1][2]);
//console.log(scores[2][0]);
//console.log(scores[2][1]);
//console.log(scores[2][2]);

for (let i = 0; i < scores.length; i++) {
	for(let j  = 0; j < scores[i].length; j++) {
		console.log(scores[i][j]);
	}
}

let i = 1;
while(i <= 10) {
	console.log(i);
	if(i === 7) {
		break;
	}
	i++;
}

let i = 1
do {
	console.log(i);
	i++;
} while (i <=3);

let colors = ['Red', 'Green', 'Blue'];
//for(let i = 0; i < colors.length; i++) {
//	console.log(colors[i]);
//}

colors.forEach(function(color){
	console.log(color)
});

//const colors  = ['Red', 'Green', 'Blue'];
//for(const color of colors) {
//	console.log(color);
//}

const str = 'JavaScript';
for(const value of str) {
	console.log(value);
}

//演習問題
let score = [100, 90, 80, 70, 60, 58, 95];
let total = 0;
for(let i = 0; i < score.length; i++) {
	total += score[i];
}
let average = total / score.length;
console.log(total);
console.log(average);
*/

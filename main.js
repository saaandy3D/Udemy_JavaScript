'use strict';

function keyUp(e) {
	//console.log('keyUp');
	//console.log(inputText.value);
	//console.log(inputText.value.length);

	//入力された値を取得
	let str = inputText.value;
	str = str.replace(/\r?\n/g, '');
	//残りの文字数
	let num = 10 - str.length;
	console.log(num);
	//文字数表示部分の要素を取得
	const characterCount = document.getElementById('characterCount');
	//残りの文字数をセットして表示
	characterCount.textContent = num 
	//残り文字数表示部分のp要素を取得
	const characterCountWrap = document.getElementById('characterCountWrap');
	//文字色の指定
	if(num >= 0){
		characterCountWrap.style.color = 'black';
	} else {
		characterCountWrap.style.color = 'red';
	}
}
const inputText = document.getElementById('inputText');
inputText.addEventListener('keyup', keyUp, false);




/*
let x = 0;

number.textContent = x;

let addButton = document.getElementById('addButton');
addButton.addEventListener('click', function(e){
	x += 1;
	number.textContent = x;
}, false);

let resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function(e){
	x = 0;
	number.textContent = x;
}, false);

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  alert('DOMContentLoaded!');
}, false);

// load
window.onload = function() {
  const nowLoading = document.getElementById('nowLoading');
  nowLoading.style.display = 'none';
}

//イベントハンドラ
function handleChange() {
	const checkAll = document.getElementById('checkAll');
	const checkBoxes = document.getElementsByName('language');
	for(let i = 0; i < checkBoxes.length; i++){
		checkBoxes[i].checked = checkAll.checked;
	}
}
const ca = document.getElementById('checkAll');
ca.addEventListener('change', handleChange, false);

const sayHelloButton = document.getElementById('sayHelloButton');
function sayHelloEventHandler(e) {
	console.log('Hello!');
}
sayHelloButton.addEventListener('click', sayHelloEventHandler, false);

const removeEventHandlerButton = document.getElementById('removeEventHandlerButton');
function removeEventHandler(e) {
	console.log('remove');
	sayHelloButton.removeEventListener('click', sayHelloEventHandler, false);
}
removeEventHandlerButton.addEventListener('click', removeEventHandler, false);

//
sayHelloButton.addEventListener('click', function(e){
	console.log('Hello!');
}, false);

//アロー演算子を使った省略の書き方
sayHelloButton.addEventListener('click', (e) => {
	console.log('Hello!');
	console.log(e);
}, false);
*/

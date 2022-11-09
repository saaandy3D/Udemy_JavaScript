'use strict';

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

/*
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

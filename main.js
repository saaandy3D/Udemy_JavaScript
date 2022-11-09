'use strict';

const sayHelloButton = document.getElementById('sayHelloButton');
sayHelloButton.addEventListener('click', function(e){
	console.log('Hello!');
}, false);

//アロー演算子を使った省略の書き方
sayHelloButton.addEventListener('click', (e) => {
	console.log('Hello!');
	console.log(e);
}, false);

//functionの外だし
function sayHelloEventHandler(e) {
	console.log('Hello!');
	console.log(e);
}
sayHelloButton.addEventListener('click', sayHelloEventHandler, false);


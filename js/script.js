// const start = document.querySelector('#start'),
// 	progress = document.querySelector('#progress'),
// 	previews = document.querySelectorAll('.preview');

// start.addEventListener('click', work);

// function work() {
// 	let counter = 0;

// 	const id = setInterval(() => {
// 		progress.value += 100 / previews.length;
// 		previews[counter].classList.toggle('ready');
// 		counter++;

// 		if (counter === previews.length) {
// 			clearInterval(id);
// 		}
// 	}, 500);
// }


// let number = 4.6;

// console.log('string' * 9);

// const obj = {
// 	name: 'John',
// 	age: 25,
// 	isMarried: false
// };

// alert("Hello!");

// const result = confirm('Please answer');

// const answer = prompt('Wath is you name?', '18');

// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как Вас зовут?', '');
// answers[1] = prompt('Как Ваша фамилия?', '');
// answers[2] = prompt('Сколько Вам?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

// const user = 'Ivan';
// alert(`Hello, ${user} - good`);


"use strict";

// let incr = 10,
// 	decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);


// console.log(4*2 === 8);

const isChecked = false,
	   isClose = false;

console.log(!isChecked || isClose);

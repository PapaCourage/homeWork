'use strict';
// Task 1 
// Найдите сумму  всех целых чисел от 1 до n включительно и верните из функции результат.

function testCycle(n) {
	var x = 0;
	for (var i = 1; i <= n; i++) {
		x = x + i;
	}
	return x;
}

console.log(testCycle(6));

// Task 2
// Даны два целых числа k и n. Верните из функции строку, которая состоит из чисел n, повторяющихся k раз, разделенных 
// пробелом. Известно, что и k и n больше либо равно 1.


function testCycle(k, n) {
	let x = " ";
	for (let i = 1; i <= k; i++) {
		x = x + n + " ";
	}
	return x;
}

console.log(testCycle(2, 4));

// Task 3
// Даны числа a и b. Выведите строку с числами от а до b, разделенных пробелами.
// Известно, что b больше a.

function testCycle(a, b) {
	let x = " ";
	for (let i = a; i <= b; i++) {
		x = x + " " + i;
	}
	return x;
}

console.log(testCycle(5, 6));

// Task 4
// Даны числа a и b. Выведите строку с числами между а и b включая границы, отсортированными по
// возрастанию. Неизвестно, какое из чисел больше, но известно, что и a и b больше 0.

function testCycle(a, b) {
	let x = " ";
	for (let i = a; i <= b; i++) {
		x = x + " " + i;
	}
	for (let i = b; i <= a; i++) {
		x = x + " " + i;
	}
	if (a == b) {
		x = a;
	}
	return x;
}
console.log(testCycle(3, 5));

// Task 5
// Даны числа a и b. Выведите строку с числами от большего числа до меньшего. Известно,
// что и a и b больше либо равно 1, но неизвестно, какое из них больше.

function testCycle(a, b) {
	let x = " ";
	if (a > b) {
		for (let i = a; i >= b; i--) {
			x += i + " ";
		}
	} else {
		for (let i = b; i >= a; i--) {
			x += i + " ";
		}
	}
	return x;
}
console.log(testCycle(5, 5));

// Task 6
// Даны числа a и b. Найдите сумму квадратов чисел между a и b включительно. Неизвестно, 
// какое из чисел a или b больше.

function testCycle(a, b) {
	let x = 0;
	if (a < b) {
		for (let i = a; i <= b; i++) {
			x += i** 2;
		}
	} else {
		for (let i = b; i <= a; i++) {
			x += i** 2;
		}
	}
	return x;
}
console.log(testCycle(9, 4));

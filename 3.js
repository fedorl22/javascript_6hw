"use strict";

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let number1 = Number(prompt('Введите первое число'));
let number2 = Number(prompt('Введите второе число'));
let number3 = Number(prompt('Введите третье число'));
const maxNumber = (num1, num2, num3) => Math.max(num1, num2, num3);
alert(`Максимальное значение равно ${maxNumber(number1, number2, number3)}`);
console.log(maxNumber(number1, number2, number3));
"use strict";

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст 
// "Размер заработной платы за вычетом налогов равен значение"

const tax = (salary) => salary - (salary * 13 / 100);
let salaryUser = Number(prompt('Введите вашу заработную плату'));
alert(isNaN(salaryUser) ? 'Значение задано не верно' : `Размер заработной платы за вычетом налогов равен ${tax(salaryUser)}`);
console.log(isNaN(salaryUser) ? 'Значение задано не верно' : `Размер заработной платы за вычетом налогов равен ${tax(salaryUser)}`);


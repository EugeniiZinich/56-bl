//Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//Рядок у форматі годин і хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

const time = Number(prompt("Ведіть кількість хвилин"));
// console.log( typeof time);

let hours = time / 60;
hours = Math.floor(hours);
hours = String(hours).padStart(2, 0);

// let minutes = time - hours * 60;
let minutes = time % 60;
minutes = String(minutes).padStart(2, 0);

console.log(`${hours}:${minutes}`);

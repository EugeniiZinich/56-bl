//Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//Рядок у форматі годин і хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const time = Number(prompt("Ведіть кількість хвилин"));
// // console.log( typeof time);

// let hours = time / 60;
// hours = Math.floor(hours);
// hours = String(hours).padStart(2, 0);

// // let minutes = time - hours * 60;
// let minutes = time % 60;
// minutes = String(minutes).padStart(2, 0);

// console.log(`${hours}:${minutes}`);



// Task-2_____________________________________

//Використовуючи функцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити:"Не знаєте? ECMAScript!"


// const userInputInLowerCase = prompt("Яка офіційна назва JavaScript?").toLowerCase();

// console.log(userInputInLowerCase);
// const officialName = "ECMAScript".toLowerCase();


// // if (userInputInLowerCase === officialName) {
// //   alert("Вірно!");
// // } else {
// //   alert("Не знаєте? ECMAScript!");
// // }

// let message = "Не знаєте? ECMAScript!"
// message = userInputInLowerCase === officialName ? "Вірно!" : message;
// alert(message);

// Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від  max  до min
const max = 50;
const min = 23;
let sum = 0;
for (let i = max; i > min; i-=1) {
    
    if (i % 2 !== 0) {
      
        continue;
    }
    sum += i;
}
console.log(sum);



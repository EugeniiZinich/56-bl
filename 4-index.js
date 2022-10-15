// Перебрати об'єкт і видалити всі імена які дублюються
// const users = {
//   John: 21,
//   Tory: 18,
//   Kate: 23,
//   Tory: 18,
//   Tory: 18,
//   Pete: 22,
//   John: 21,
// };

// // const keys = Object.keys(users);
// // console.log(keys);

// for (let user in users) {
//   console.log(user);
// }
// console.log(users);

// // Потрібно мутувати масив так щоб залишились тільки (імена) елементи типу String.
// const names = ["Anna", 3, "Roma", 17, "Kate", 14, "Oleg"];
// 1- спосіб
// const newArr = names.filter((name) => typeof name === "string");
// console.log(newArr);
// 2 спосіб через мутування
// for (let i = 0; i < names.length; i += 1) {
//   if (typeof names[i] !== "string") {
//     names.splice(i, 1);
//     i -= 1;
//   }
// }
// console.log(names);

/*
? Напиши скрипт, який для об'єкта user послідовно:
? додає поле mood зі значенням 'happy'
? замінює значення hobby на 'skydiving'
? замінює значення premium на false
? виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// // user.mood = 'happy';
// // user["mood"] = 'happy'

// const userMood = "mood";

// user[userMood] = 'happy';

// // user.hobby = "skydiving";
// user['hobby'] = "skydiving";

// user.premium = false;
// // console.log(user);

// const userKeys = Object.keys(user);
// // console.log(userKeys);

// for (const key of userKeys) {
//   // console.log(key);
//   // console.log(user[key]);
//   console.log(`${key}:${user[key]}`);
// }


// Task 2 - 2
/*
? У нас є об'єкт, де зберігаються зарплати нашої команди.
? Напишіть метод об'єкта для підсумовування всіх зарплат та збережіть результат у змінній sum.
? Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
*/

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const totalSalaries = arr => {
//   const values = Object.values(arr);
//   let sum = 0;
//   for (const value of values) {
//     sum += value;
    
//   }
//   return sum;
// }
// console.log(totalSalaries(salaries));


/*
? Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок
 під назвою каменю.
? Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям.
*/

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
//   { name: 'Смарагд', price: 1300, quantity: 4 }
// ];


// const calcTotalPrice = (stones, stoneName) => {
//   let totalPrice = 0;
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       console.log(stone);
      
//       totalPrice += (stone.price * stone.quantity);

//     }
    
//   }
//     return totalPrice
// }

// console.log(calcTotalPrice(stones, 'Смарагд' ));
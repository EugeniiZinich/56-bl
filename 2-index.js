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

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const totalSalaries = arr => {
  const values = Object.values(arr);
  let sum = 0;
  for (const value of values) {
    sum += value;
    
  }
  return sum;
}
console.log(totalSalaries(salaries));

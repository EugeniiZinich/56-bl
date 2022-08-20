/*
? Напиши скрипт, який для об'єкта user послідовно:
? додає поле mood зі значенням 'happy'
? замінює значення hobby на 'skydiving'
? замінює значення premium на false
? виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
*/

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

// user.mood = 'happy';
// user["mood"] = 'happy'

const userMood = "mood";

user[userMood] = 'happy';

// user.hobby = "skydiving";
user['hobby'] = "skydiving";

user.premium = false;
// console.log(user);

const userKeys = Object.keys(user);
// console.log(userKeys);

for (const key of userKeys) {
  // console.log(key);
  // console.log(user[key]);
  console.log(`${key}:${user[key]}`);
}
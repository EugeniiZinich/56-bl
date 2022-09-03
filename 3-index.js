// task-3-2

// Назначить скидку 20% на фрукты в массиве,
// //присвоить id для каждого продукта

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// const changedFruits = fruits.map((fruit) => {
//   return {
//     ...fruit,
//     price: fruit.price * 0.8,
//     id: Date.now(),
//   };
// });
// console.log(changedFruits);

// const items = [
//   { name: "SAMSUNG", price: 15000 },
//   { name: "LG", price: 9000 },
//   { name: "DELL", price: 27000 },
//   { name: "BENQ", price: 12000 },
//   { name: "ASER", price: 7000 },
// ];
// const sortedItems = [...items].sort((a, b) => a.price - b.price);
// console.log(sortedItems);
// Напиши класс Client котрорый создает объект
//со свойствами login email3q
//Объяви приватные свойства #login #email,
//доступ к которым сделай через геттер и сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const client2 = new Client({ login: "Mango", email: "panivnykm@gmail.com" });
// client2.login = "Poly";
// console.log(client2.login);

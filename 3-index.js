// task-3-2

// Назначить скидку 20% на фрукты в массиве,
// //присвоить id для каждого продукта

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

const changedFruits = fruits.map((fruit) => {
  return { ...fruit, price: fruit.price * 0.8, id: Date.now() };
});
console.log(changedFruits);

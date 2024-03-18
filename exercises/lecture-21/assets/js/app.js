// task 1 ==== Перетворити рядок fruits у масив.
//  Результат зберегти у масиві fruits.
const fruits = 'apple banana cantaloupe blueberries grapefruit';
console.log(typeof fruits);

const fruitsToArray = fruits.split(' ');

console.log(fruitsToArray);
// task 2 ===
// Використовуючи цикл for, 
// вивести на консоль список елементів з масиву fruits.
for (let i = 0; i < fruitsToArray.length; i += 1) {

  console.log(fruitsToArray[i]);
}

// task 3 ====
// Використовуючи цикл while, 
// вивести на консоль список елементів з масиву fruits.
let counter = 0;
while (counter < fruitsToArray.length) {
    console.log("fruits:", fruitsToArray[counter]);
    counter++;
}






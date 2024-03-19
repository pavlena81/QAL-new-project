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

// task 4 ====
// Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.
let i = 0;
do {
    console.log(fruitsToArray[i]);
    i++;
        
} while (i < fruitsToArray.length)

// task 5 ===
// Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits.

for (const element of fruitsToArray) {
    console.log("elements:", element);
}

// task 6 ===
// Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs.

const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < Numbs.length; i += 2){
//     console.log(Numbs[i]);
// }

for (let i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 === 0) {
        console.log(Numbs[i]);
    }
}

// task 7 ===
// Додати 'Joker' в кінець масиву names:

const names = ['Batman'];
names.push('Joker');
console.log(names);

// task 8 ===
// Додати 'Joker' на початок масиву names

names.unshift('Joker');
console.log(names);

// task 9 === 
// Додати 'Catwoman' на початок масиву names, використовуючи метод unshift

// const names = ['Batman', 'Joker', 'Bane'];
names.unshift('Catwoman');
console.log(names);

//  task 10 ===
// Додати 'Catwoman' на початок масиву names, використовуючи оператор ...

// const newNames = ['Catwoman', ...names];
// console.log(newNames);

console.log(['Catwoman', ...names]);

// task 11 ===
// Додати до names елемент 'Catwoman', розмістивши його з індексом 1

 const nameS = ['Batman', 'Joker', 'Bane'];
nameS.splice(1, 0, 'Catwoman');
console.log(nameS);

// task 12 ===
// Видалити елементи 'Catwoman' і 'Joker' з масиву nameS:

nameS.splice(1, 2);
console.log(nameS);

// task 13 ===
// Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві namEs 

const namEs = ['Batman', 'Catwoman', 'Joker', 'Bane'];
namEs.splice(1, 2, 'Alfred');
console.log(namEs); 

// task 14 ===
// Перевірити чи існує рядок 'Alfred' у масиві names,
//  і якщо не існує, додати його до кінця масиву.

const naMes = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// naMes.includes('Alfred')
if (naMes.includes('Alfred') !== true) {
    naMes.push('Alfred')
    
}
console.log(naMes);

// task 15 ===
// Перевірити, чи існує рядок 'Alfred' у масиві names,
//  і якщо існує, видалити його з масиву.

const nAmes = ['Batman',  'Catwoman', 'Joker', 'Alfred', 'Bane'];

const index = nAmes.indexOf('Alfred');

if (index !== -1) {
    nAmes.splice(index, 1);
}

console.log(nAmes);
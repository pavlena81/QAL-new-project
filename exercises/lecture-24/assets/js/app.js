// task 1 === 

const colors = ['blue', 'green', 'white'];
console.log(colors);


colors.forEach(function iter(item ){
    console.log(`Значення ${item}`);
})

// task 2 === 

const colors2 = ['blue', 'green', 'white'];

colors2.forEach(function iterate(item, index ){
    console.log(` ${item} has index ${index}`);
})

for (let i = 0; i < colors2.length; i += 1) {
    if (i === colors2.length-1) {
        console.log(`The last iteration! ${colors2[i]}`);
    }
  
}

// task 3 === 

const letters = ['a', 'b', 'c'];

function iterate(letter) {
console.log(this === window); // true;
}

iterate();

// task 4 === 

const Numbers = [22, 3, 4, 10];
console.log(typeof Numbers);


let allEven = true;
Numbers.forEach(function(number) {
if (number % 2 === 1) {
    allEven = false;
    } 
   
});
console.log(allEven); //false

// task 5 ===

const numbers = [22, 3, 4, 10];

function isNumbersEven(element) {
  return element % 2 ===0;
}

numbers.every(isNumbersEven)//
console.log(numbers.every(isNumbersEven));//false

// task 6 ===
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries"); // 3
console.log(index);

//  task 7 === 
const arr = [7, 33, 47, 99, 2, 103, 79];
// Використовуючи метод find, знайти перший елемент у масиві arr,
//  який задовольняє умову елемент > 10.

const firstEl = arr.find(element => element > 10);
console.log(firstEl);

// task 8 ===

const array = [1, 2, 3, 4, 5];
// Використовуючи метод some, перевірте, чи існує принаймні один елемент 
// у масиві array, що є парним.
const even = (element) => element % 2 === 0;
console.log(array.some(even));//true

//  task 9 === 
const numbers2 = [1, 30, 4, 21, 100000]; 

// Використовуючи метод sort, 
// відсортуйте елементи масиву "numbers" у порядку зростання.

const sortNumbers2 = [...numbers2].sort();
console.log(sortNumbers2); //[1, 100000, 21, 30, 4]

const sortNumbers3 = [...numbers2].sort((a, b) => a - b);
console.log(sortNumbers3);//[1, 4, 21, 30, 100000] 
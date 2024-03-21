const classes = ['first', 'second', 'third', 'fourth'];

// task 1 ====
// Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об'єкту та його розмір. Використовуючи цикл for, вивести на консоль
// кожний елемент з отриманого об'єкту.

const getAllElementByTeg = document.querySelectorAll('h1');

console.log(getAllElementByTeg);
console.log(typeof getAllElementByTeg);

const size = Object.keys(getAllElementByTeg).length;
console.log(size);


for (const element of getAllElementByTeg) {
   
    console.log(element);
}
 
// task 2 ==== 
// Отримати перший абзац за допомогою document.querySelector('#id')
//  за його ідентифікатором p1. 
// Встановити для нього стиль background - color = "gold"


const getElById = document.getElementById('p1');
console.log(getElById);

getElById.style.background='gold'
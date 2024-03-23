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

getElById.style.background = 'gold';

// task 3 ===
// Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2.
//  Встановити для нього стилі background - color: gold; color: blue; font - size: 2rem;

const paragtaphTwo = document.querySelector('#p2');
console.log(paragtaphTwo);
paragtaphTwo.style.backgroundColor = 'gold';
paragtaphTwo.style.color = 'blue';
paragtaphTwo.style.fontSize = '2rem';

// task 4 ====
// Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3.
//  Призначити для нього клас third

const paragraphThree = document.querySelector('#p3');
console.log(paragraphThree);
paragraphThree.className = 'third';

// task 5 ===
// Отримати четвертий абзац за допомогою document.querySelector('#id')
//  за його ідентифікатором p4.Призначити для нього класи fourth та border


const paragraphFour = document.getElementById('p4');
console.log(paragraphFour);
paragraphFour.className = 'fourth';
paragraphFour.classList.add('border'); 

// task 6 ===
// Знайти всі елементи з класом container. Використовуючи цикл for, 
// вивести на консоль перший елемент для кожного зі знайдених елементів.

const containers = document.getElementsByClassName('container');
console.log(containers);


for (const item of containers) {    
    console.log(item.firstElementChild);
};

// task 7 ===
// Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль вміст першого елементу 
// для кожного першого елемента зі знайдених елементів.

for (const item of containers) {
    console.log(item.firstElementChild.firstElementChild);
}

// task 8 ===
// Знайти колекцію всіх елементів з селектором '.container header', зберегти її в змінній headers. Використовуючи цикл for для отриманої колекції headers,
//  замінити заголовки h1 таким чином
// перший залишити h1
// другий замінити на h2
// третій замінити на h3
// четвертий замінити на h4 зберегти початкові атрибути id та class

 const headers = document.querySelectorAll('.container header');
console.log(headers);


for (let i = 0; i < headers.length; i++) {
    const newHeader = document.createElement(`h${i + 1}`); 

    newHeader.textContent = headers[i].textContent;
    newHeader.id = headers[i].id;
    newHeader.className = headers[i].className;     
    
    headers[i].parentNode.replaceChild(newHeader, headers[i]);
    
    console.log( newHeader);
}

// ======
// for (let i = 0; i < headers.length; i++) {

//     console.log(headers[i].tagName);
//     console.log(headers[i].children);

//     let newTagName;
//     switch (i) {
//         case 0:
//             newTagName = 'h1';
//             break;
//         case 1:
//             newTagName = 'h2';
//             break;
//         case 2:
//             newTagName = 'h3';
//             break;
//         case 3:
//             newTagName = 'h4';
//             break;
//         default:
//             newTagName = 'h5'; // 
//             break;
//     }

//     const newHeader = document.createElement(newTagName);

//     newHeader.textContent = headers[i].textContent;
//     newHeader.id = headers[i].id;
//     newHeader.className = className; 

//     headers[i].parentNode.replaceChild(newHeader, headers[i]);
//     console.log( newHeader);
// }
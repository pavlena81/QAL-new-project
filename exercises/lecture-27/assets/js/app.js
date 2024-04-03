const ul = document.querySelector('ul');
console.log(ul);

// task === За допомогою JSON.parse прочитати елемент localStorage з ключем items та зберегти його в масиві itemsArray. 
// Якщо елемент відсутній, створити його зі значенням[].

const savedItems = localStorage.getItem('items');

// console.log(savedItems);

const itemsArray = new Array();
console.log(itemsArray);

const parsedItems = JSON.parse(savedItems);
console.log(parsedItems);

itemsArray.push(parsedItems);
console.log(itemsArray);


// task === Написати функцію addTask(text)....

function addTask(text) {
    const item = document.createElement('li'); 

    item.textContent = text;

    const list = document.querySelector('ul');

    list.appendChild(item);
} 

addTask('to do home task');

// task === Використовуючи метод forEach та функцію addTask...

const createEl = ['create', 'read', 'update', 'delate'];
console.log(createEl );

createEl.forEach(el=>{
    addTask(el)
})

// task === Написати функцію add()...

const add = () => {

    const input = document.getElementById('item');
    const inputValue = input.value;
    console.log(inputValue);

    itemsArray.push(inputValue);
    localStorage.setItem('items', JSON.stringify(itemsArray));

    addTask(inputValue);

    input.value = ' ';    
    
}

const button = document.querySelector('button');
button.addEventListener("click", add);

// function add() {
// }


// task === Написати функцію del()...

function del() {
    localStorage.removeItem('items');
    // console.log(localStorage.getItem('items'));
    itemsArray.pop();

    const ul = document.querySelector('ul');
    const liToRemove = ul.lastElementChild;
    
    ul.removeChild(liToRemove);
   
}

button.addEventListener("click", del);

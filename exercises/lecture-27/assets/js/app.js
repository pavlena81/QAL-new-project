const ul = document.querySelector('ul');
console.log(ul);
const input = document.getElementById('item');

const savedItems = localStorage.getItem('items');

console.log(savedItems);

const itemsArray = new Array();
console.log(itemsArray);

const parsedItems = JSON.parse(savedItems);
console.log(parsedItems);

itemsArray.push(parsedItems);
console.log(itemsArray);


function addTask(text) {
    const item = document.createElement('li'); 

    item.textContent = text;

    const list = document.querySelector('ul');

    list.appendChild(item);
} 

addTask('to do home task');

const createEl = ['create', 'read', 'update', 'delate'];
console.log(createEl );

createEl.forEach(el=>{
    addTask(el)
})


function add() {
}

function del() {
}

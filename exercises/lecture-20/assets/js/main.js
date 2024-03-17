// task 1 ==== 
// Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. Надати значення цим властивостям.
//  Вивести значення властивостей об'єкту на консоль

const person = new Object();
person.name = "Alex";
person.age = 10;

console.log(person);
console.log(typeof person.name);
console.log(typeof person.age);

// task 2 ====
// Змінити тип властивості name з рядка на об'єкт, з ключами firstName та lastName. Надати значення цим властивостям.
//  Вивести значення властивостей об'єкту на консоль.
person.name = {
    firstName: " Alex",
    lastName: "Ivanov"
}
 
console.log(typeof person.name);
console.log(person);

// task 3 ===
// Створити метод об'єкту bio(), що виводить на консоль ім'я,
//  прізвище та вік person.
person.bio = function () {
    console.log(` My name is ${this.name.firstName} and my lastName ${this.name.lastName}. I am ${this.age} years old.`)
}

person.bio();

// task 4 === 
// Створити метод об'єкту introduceSelf, 
// що виводить на консоль Hi! I'm firstName.

const me = Object.create(person);
me.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name.firstName} `);
};
me.introduceSelf();

// task 5 ===
// Створити функцію - шаблон createPerson, що приймає
//  аргумент name та повертає новий об'єкт з властивістю
//  name та методом introduceSelf.Створити за допомогою createPerson
// 2 екземпляри об'єкта.

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    }
    return obj;
}

const person1 = createPerson('Anna');
const person2 = createPerson('Max');

person1.introduceSelf();
person2.introduceSelf();

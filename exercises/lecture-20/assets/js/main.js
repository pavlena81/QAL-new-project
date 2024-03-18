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

// task 6 === 
// Створити функцію-конструктор Person,
//  що приймає аргумент name та повертає новий об'єкт з властивістю 
// name та методом introduceSelf.Створити за допомогою Person
// 2 екземпляри об'єкта mary та tom.

// визначити, чи містить об'єкт mary властивість під назвою prop.

function Person(name) {
    return {
        name: name,
        introduceSelf() {
            console.log(`My name is {this.name}`);
        },
    }
}

const mary = new Person('Marry');
console.log(mary.hasOwnProperty('prop'));

const tom = new Person('Tom');

// task 7 ====

function DirtyMartini() {
    return {
        english_please() {
            console.log(`ingredients:
        6 fluid ounces gin
        1 dash dry vermouth (0.0351951ml) 
        1 fluid ounce brine from olive jar
        4 stuffed green olives`)
        },
        excuse_my_french() {
            console.log(`ingrédients:  
        170.4786 ml de gin
        1 trait de vermouth sec (0.0351951ml) 
        28.4131 ml de saumure du pot d'olive
        4 olives vertes farcies`)
        }
    }
}

const myMartini = DirtyMartini();
console.log(typeof myMartini);
myMartini.excuse_my_french();

myMartini.english_please();

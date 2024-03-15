// task 1======
// Чи мають рядки str1 та str2 однакову довжину. 
// Перевірити на рівність(недбалу та строгу) рядки str1 та str2.
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

console.log(str1.length);//13;
console.log(str2.length);//13
console.log(str1 === str2);//true;

console.log(str1 == str2);// true;

// task 2====Повернути перший символ рядка string5.
//  Виконайте завдання, використовуючи індекс та метод charAt.

let string5 = 'Hello World';
alert(string5.charAt(0));

// повернути символ J рядка str3:
let str3 = "Hello Javascript";
alert(str3.charAt(6));

console.log(str3[6]);//j

// task 4 ====Використовуючи індекс, отримати доступ до
//  останнього символу рядка двома способами
console.log(str3[str3.length - 1]);//t;
const lastStr3 = str3.charAt(str3.length-1);
console.log(lastStr3);

// task 5 === Напишіть три варіанти функції lastChar, 
// що повертає останній символ рядка

function lastChar() {
    let string = 'Return symbol';
    return string.charAt(string.length - 1);
}
console.log(lastChar());


const lastChar1 = () => d[d.length - 1];

let d = 'Home';

console.log(lastChar1());

const lastChar2 = function () {
    let str = 'Hello';
    return str.slice(-1); 
}

console.log(lastChar2());

// task 6 ==== Використовуючи метод concat, 
// вивести на консоль: When candles are out, all cats are grey


let aa = 'When candles are out,';
let bb = 'all cats are grey.';

console.log(aa.concat(bb));

// task 7 ==== Використовуючи змінні a, b, fact,
//  змінити значення fact та вивести його на консоль, 
// щоб результат виглядав так: Fifteen is the same as 15

let fact = "Fifteen is the same as"
let a = 5;
let b = 10;

console.log(fact.concat(' ', a + b));
 
// task 8 ==== Напишіть функцію getFullName, що повертає результат: "Tom Cat"

let firstName = "Tom";
let lastName = "Cat";

function getFullName() {

    return firstName.concat(' ',lastName)
}
console.log(getFullName());

// task 9 === Напишіть функцію greeting, 
// що використовує виклик функції getFullName
//  та повертає такий результат: Hello, Tom Cat!

function greeting(callback) {
    return `Hello, ${callback()}!`
}

console.log(greeting(getFullName));


// task 10 === Використовуючи функцію greeting, створити такий шаблон:

// <div><h1>Hello, Tom Cat!</h1></div>

const title = document.createElement('h1');

title.textContent = `${greeting(getFullName)}`
document.body.append(title);

// task 11 === 
let string1 = "  The name of our game  ";

// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"

console.log(string1.trim());
console.log(string1.trimStart());
console.log(string1.trimEnd());

const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
// => '555-123'
// => '555-123 \n'
console.log(phoneNumber.trim());
console.log(phoneNumber.trimStart());

// task 12 ====
// Перевірити, чи містить рядок значення 'look up'
// Перевірити, чи містить рядок значення 'look on'
// Перевірити, чи містить рядок значення 'look on'Б
//  починаючи з 8 - ї позиції

let sentence = 'Always look on the bright side of life';
console.log(sentence.includes('look up'));//false;
 
console.log(sentence.includes('look on'));//true;

console.log(sentence.indexOf('look on', 8));//-1;



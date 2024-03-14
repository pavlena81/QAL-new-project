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
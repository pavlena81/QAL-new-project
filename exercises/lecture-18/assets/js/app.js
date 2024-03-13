// task 1.1 ======
// Перепишіть функцію checkAge, видаливши else.

function checkAge(age) {
      if (age > 18) {
        return true;
      } 
        return confirm('Did parents allow you?');
}
      
// console.log(checkAge(20));
//task 1.2 ======Чи буде функція працювати інакше, якщо видалити else?
//функція буде відпрацьовувати - аналогічно: 
//  Якщо age>18, return true.Якщо age<=18, то відпрацює confirm і 
//поверне результат цього запиту

function checkAge(age) {
      if (age > 18) {
        return true;
      } else {
        // ...
        return confirm('Did parents allow you?');
      }
}
    
// console.log(checkAge(14));

//task 1.3 ======= Чи є різниця в поведінці цих двох варіантів і чому?
// функція буде працювати аналогічно:  якщо виконується умова if (age > 18) -  true
// Якщо умова приводиться до true, то виконується код у фігурних дужках тіла if.
// Якщо умова приводиться до false, код у фігурних дужках буде пропущений
// та виконується код за ними
// 

// task 1.4 ====1.4.1 Перепишіть функцію checkAge, використовуючи '?'

let age = 22
const type = age > 18 ? "true" : confirm("Did parents allow you?")
 
//console.log(type);

// =======1.4.2 Перепишіть функцію checkAge, використовуючи '||'
function checkage(age) {
   return age > 18 || confirm('Did parents allow you?');
}
console.log(checkage(15));
//   =====1.4.3 Чи потрібні дужки навколо age > 18 
// return (age > 18) || confirm('Did parents allow you?'); - ні, але їх можна використовувати, щоб код був більш зрозумілий

// task 4 Напишіть функцію min(a,b),
//  яка повертає найменше з двох чисел a і b.
// У випадку рівності a == b немає значення, що повертати.
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1 
// === реалізуйте функцію min, використовуючи оператор if else 

let minNumber; 

function min(min1, min2) {
    if (min1 > min2) {
        return minNumber = min2;
    } else if (min1<min2){
        return minNumber = min1;
    }else if (min1==min2){
        return min1 || min2
    }
    
}
 
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(2, 2));
// ===реалізуйте функцію min, використовуючи тернарний оператор

const min1 = 2;
const min2 = 2;
const minNumbers = min1 > min2
    ? min2
    : min1
// console.log('\n' + '-'.repeat(10));

console.log(minNumbers);

// task 3 ====== Напишіть функцію pow(x,n), яка повертає x у ступені n. Або, іншими словами, 
// множить x на себе n разів і повертає результат.У цьому завданні функція 
// повинна підтримувати лише натуральні значення n: цілі числа від 1.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

function mathPow(x, y) {
    return Math.pow(x,y)
}

console.log(mathPow(1, 100));

// ======Створіть сценарій, де спочатку користувачу пропонують ввести x і n, а потім показують результат pow(x,n),
//  або повідомлення про неправильне значення параметра n.



function mathPow2(x, n) {
    
    if (!isNaN(n) && n >= 0) {
        return Math.pow(x, n);
    } else {
        return "Параметр n повинен бути числом >0";
    }
}
let x = parseFloat(prompt('Введіть значення x:'));
let n = parseFloat(prompt('Введіть значення n:'));

let res = mathPow2(x, n);
console.log(res);

// task 5 ======Переписати функцію ask, використовуючи функцію стрілок:
function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    }
    else {
        no();
    }
}
const askArrow = (question, yes, no) => {
    if (confirm(question)) {
        yes();
    }
    else { no(); }
}
 
// task 6=====Переписати функцію ask, використовуючи функціональний вираз:

const askFunc = function ask(question, yes, no) {
    if (confirm(question)) { yes(); }
  else {no();} 
}
// task 7 ===== 
// Яким чином виконати виклик функцій A() і C(), щоб на консолі отримати такий 
// результат A was called C was called foo

function A() { console.log('A was called'); return undefined;}
function B() { console.log('B was called'); return false;}
function C() { console.log('C was called'); return "foo"; }


console.log(C(A()));
 
// ====Яким чином виконати виклик функцій B() і C(), щоб на консолі отримати такий 
// результат B was called C was called foo

console.log(C(B()));
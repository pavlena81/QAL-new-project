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
    } else {
        return minNumber = min1;
    }
    
}
 
console.log(min(2, 5));
console.log((3, -1));
console.log(min(2, 2));
  
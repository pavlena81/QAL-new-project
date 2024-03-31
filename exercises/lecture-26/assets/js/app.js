// task 1 ===
// function calculate(numbers) {
//  let sum = 0;
//  for (const number of numbers) {
//    sum = sum + number;
//  }
//  return sum;
// }
// calculate([1, 2, 4]); // => 7
// console.log(calculate([1, 2, 4]));

// sum() - це функція, яка описує операцію додавання. 
function sum(n1, n2) {
   return n1 + n2;
}

// multiply() - це функція, яка описує операцію множення.

function multiply(n1, n2) {
   return n1 * n2;
}
 
function calculate(callback, initialValue, numbers) {
   return numbers.reduce(callback, initialValue)
}

console.log(calculate(sum, 0, [1, 2, 4]));
console.log(calculate(multiply, 1, [1, 2, 4]));
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

// task 2 ===
let student_names = ["Wick", "Malcolm", "Smith"];

const studentNames =  student_names.map(function(item, index, array) {
    console.log('name:',item,' index:', index, 'array:',array);
});

// task 3 ===

const students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453},
 ];

 
const studentsInformation = students_information.map((item) => {

    const persentage = ((item.degree*100)/600)
     console.log('name:',item.name, ' degree:', item.degree, 'percentage:',persentage);
})
 
// task 4 === 

const arr = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];

const allArr = arr.reduce((acc, curr) => {
    return acc.concat(curr) 
}, []);
console.log(allArr);

// task 5 === 

Array.prototype.upperCase = function () {
let i;
for (i = 0; i < this.length; i++) {
this[i] = this[i].toUpperCase();
}
};

function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase();
    console.log(arr);
}

myFunc(); // [ 'ALGORITHM', 'DATA STRUCTURE', 'OPERATING SYSTEM', 'HTML' ]
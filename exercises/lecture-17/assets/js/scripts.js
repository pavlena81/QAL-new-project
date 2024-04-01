  //task 1
//   let x = 3
//   let y = 4

//   x == 3 //true  
//   x === "3"//false   
//   x!=5//true
//   x!== "5"//true
//   x!== 3//false

//   y > 5//false 
//   y >= 3//true

//   y < 5//true 
//   y <= 2//false  

//   1 == true //true
//   null == undefined //true

//   NaN == NaN//false 
  
//task 2 
let x = 3;
let y = 4;
let z = 5;

x ||= y;// 3
x || (y = z);// 3
x &&= y; //4
x && (y = z);//5 
x ??= y;//4 
console.log(x ??= y);
x ?? (y = z);//4 
console.log(x ?? (y = z));

//task 3   

// let guess = parseInt(prompt("Try to guess a number from 1 to 10:"));

// if (guess === 3) {
//      alert('Congratulations, You did it!');
// } else if (guess > 3){
//     alert('The number is too long');
// } else if (guess < 3) {
//     alert('The number is short');
// }

//task 4 

// Напишіть версію програми, застосовуючи оператор if else

let day = (prompt("Enter the day of the week")).toLowerCase();

if (day === "понеділок" || day === "monday") {
    alert('Start of the work week!')
} else if ( day === "п'ятниця"|| day === "friday") {
    alert('End of the work week!')
} else {
    alert("A regular day")
}
// ============ 
// Напишіть версію програми, застосовуючи оператор switch
let dayWeek = (prompt("Enter the day of the week")).toLowerCase();

// switch (dayWeek) {
//     case (dayWeek === "понеділок" || dayWeek === "monday"):
//         alert('Start of the work week!');
//         break;
//     case (dayWeek === "п'ятниця" || dayWeek === "friday"):
//         alert('End of the work week!');
//         break;
    
//     default:(alert('A regular day'))
// } 
switch (dayWeek) {
    case "Monday":
  case "Понеділок":
    alert("Start of the work week!");
    break;
  case "Friday":
  case "П'ятниця":
    alert("End of the work week!");
    break;
  default:
    alert("A regular day");
}
 
//task 5
//======Напишіть версію програми, застосовуючи оператор if else

// let score = 150; 

// let studentDegree; 

// if (score < 50) {
//     studentDegree = 'F';
// } else if (score < 70) {
//     studentDegree = 'D';
// } else if (score < 80) {
//     studentDegree = 'C';
// } else if (score < 90) {
//     studentDegree = 'B';
// } else {
//     studentDegree = 'A';
// }

// console.log(`Студент отримав ступінь: ${studentDegree}`);
//======= Напишіть версію програми, застосовуючи тернарний оператор
let score = 80; 

let studentDegree = score < 50 ? 'F' :
            score < 70 ? 'D' :
            score < 80 ? 'C' :
            score < 90 ? 'B' : 'A';

console.log(`Студент отримав ступінь: ${studentDegree}`);

//task 6 


let firstName = null;
let lastName = undefined;
let username = (firstName || lastName) ?? "Guest";

console.log(username); // "Guest"





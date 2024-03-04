let message1 = 'Hello ';

let message2 = 'JavaScript';

let resMes = message1 + message2;
console.log(resMes);
//alert(res)

//task 2
let message3 = 'hello';
let numStr = '123456';
    
console.log(typeof numStr);
//console.log(typeof String(numStr));
//console.log(typeof numStr.toString());
//console.log(typeof (numStr + ''));

//task 3

let x = prompt("Введіть значення для x:");
let y = prompt("Введіть значення для y:");

// Перетворюємо введені значення у числа
x = parseFloat(x);
y = parseFloat(y);

// Check if the numbers are correct
if (isNaN(x) || isNaN(y)) {
    console.log("Введені значення не є числами.");
} else {
    
    let sum = x + y;
    console.log("Sum x і y: " + sum);
    alert(sum) 
}
//==========================================
//or //Check if the numbers are correct
if (!isNaN(x) && !isNaN(y)) {
    
    let sum = x + y;
    console.log("Sum x і y: " + sum);
} else {
    console.log("The values you enter are not numbers.");
}
//========================================= 

//task 4

let a = 9007199254740991;
let bigIntA=BigInt(a)
let b = 9007199254740991n;

let sum = bigIntA + b;

console.log(sum); 

//task 5

    let apples = 2;
    let oranges =3;

    //alert( apples + oranges ); 

//task 6
   








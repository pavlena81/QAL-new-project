// task 1 === 

const colors = ['blue', 'green', 'white'];
console.log(colors);


colors.forEach(function iter(item ){
    console.log(`Значення ${item}`);
})

// task 2 === 

const colors2 = ['blue', 'green', 'white'];

colors2.forEach(function iterate(item, index ){
    console.log(` ${item} has index ${index}`);
})

for (let i = 0; i < colors2.length; i += 1) {
    if (i === colors2.length-1) {
        console.log(`The last iteration! ${colors2[i]}`);
    }
  
}

// task 3 === 

const letters = ['a', 'b', 'c'];

function iterate(letter) {
console.log(this === window); // true;
}

iterate();

// task 4 === 

const Numbers = [22, 3, 4, 10];
console.log(typeof Numbers);

Numbers.forEach(function(number) {
if (number % 2 === 0) {
console.log(number);
} 
});




// Array --> Array is collections of data.

// Adding Element on Array:
// 1.push 2.unshift 3.splice

//Push:
let fruits = ['apple','grapes','orange']
fruits.push('guva')
console.log(fruits);
//unshift
let fruits1 = ['apple','grapes','orange']
fruits1.unshift ('guva')
console.log(fruits1);
//splice
let fruits2=['apple','grapes','orange']
fruits2.splice (1,1,'guva')
console.log(fruits2);

// Removing Element on Array:
// 1.pop 2.shift 3.splice

// pop
let num = [1,2,3,4,5]
num.pop();
console.log(num);
// shift
let num1 = [1,2,3,4,5]
num1.shift();
console.log(num1);
// splice
let num2 =[1,2,3,4,5]
num2.splice(2,2);
console.log(num2);
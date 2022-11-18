// Fuction --> A function is a block of code.

// Function declaration
let num1=33;
let num2=77;
function add(){
    let result = num1+num2;
    console.log(result);
}
add(); //-->A function is excuted when something calls it.

// Function expression
let add1=function add(){
    let result = num1+num2;
    console.log(result);
}
add1();

// Anonymous function
let add2=function(){
    let result = num1+num2;
    console.log(result);
}
add2();

// Arrow function
let add3= ()=>{
    let result = num1+num2;
    console.log(result);
}
add3();

//IIFE -(immediately invoked function expression)
(()=>{
    let no1=40;
    let no2=20;
    let over = no1 + no2;

    (()=>{
        console.log("Result :",over);
    })();
})();

// Function arguments
function sree(){
    let total = 0;
for(let key of arguments){
total = total + key;
}
return total;
}
let gokul=sree(67,44,77,45);
console.log(`This is my routine expence : ${gokul}`);

// Rest operator
function restOpp(...expence){
let tot = expence.reduce((a,b)=>a+b)
return tot;
}
let rest=restOpp(67,44,77,45);
console.log(`This is my routine expence : ${rest}`);

// Function defult parameters :
function GST(salary,tax = 18)//by passing arugument value directly as parameter value.
{
salary = salary + (salary * tax/100);
console.log(`This is my salary with GST value = ${salary}.`);
return salary;
}
GST(18000);



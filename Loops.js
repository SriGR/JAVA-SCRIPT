// loop -> it's can excute a block of code a number of times

// for loop -> loops through a block of code a number of times
// while loop -> loops through a block of code while a specified condition is true
// do while loop -> also loops through a block of code while a specified condition is true
// for in loop -> loops through the properties of an object
// for of loop -> loops through the values of an iterable object

//FOR LOOPS:
for(i=1; i<=10; i++){
    if(i%2==0)
    console.log("EVEN NUMBER:"+ i);
    else
    console.log("ODD NUMBER:"+ i);
}

//WHILE LOOP:
let s=20;
while (s<=30) {
    if(s%2==0)
    console.log("EVEN NUM:"+ s);
    s++;
}

//DO WHILE LOOP:
let a = 10;
do{
    if(a%2==0){console.log("num:"+ a);
}
a++;
}
while(a<=20);

// FOR IN LOOP:
let employee = {
    name:"sree",age:24,location:"salem"
}
for(let key in employee){
    console.log(key +": "+employee[key]);
}

// FOR OF LOOP:
let color = ["blue","green","black"]
for(let key of color){
    console.log( key);
}
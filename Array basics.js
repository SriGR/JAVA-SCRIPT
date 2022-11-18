// Array --> array is collections of data

// Finding element on premitive type arrays
let cars=['shift','MG','BMW','Audi','Benz']
console.log(cars.indexOf('MG')); //--> finding what position
console.log(cars.includes('BMW')); //--> finding element in or out follwing true or false method

// Finding an element on reference type array
let employee = [
    {id:1,name:"sree",place:"salem"},
    {id:2,name:"gokul",place:"erode"},
    {id:3,name:"ranjith",place:"mettur"},
    {id:4,name:"nr gokul",place:"kolathur"},
    {id:5,name:"karthi",place:"covai"}
]

let result = employee.find(function(example){
return example.name==="gokul"
})
let result2 = employee.findIndex(function(example){
    return example.name==="karthi"
})
console.log(result);
console.log(result2);

// emptying an js array
let number=[1,2,3,4,5]
number=[]
number.length=0;
number.splice(0,number.length);
console.log(number);

// combining array
let num1=[1,2,3,4,5]
let num2=[6,7,8,9,10]
let final=num1.concat(num2);
console.log(final);
// extracting array
let final1=final.slice(2,9);
console.log(final1);

// spread operator
var eg1=[1,2]
var eg2=[4,5]
var ex3=[
    33,'karthi',...eg2,'nr gokul',{name:'sree gokul'},...eg1
]
console.log(ex3);

// joining array
var eg3=[1,2,3,4,5]
var eg5=eg3.join();
console.log(eg5);//--> viewing results continuously not an array method.

//splitting array
 var name1="sree gokul ranjith"
 var finalName=name1.split(" ");
 console.log(finalName);

//  sorting an array
var sortex1=[5,3,88,7,1]
var sortex2=[55,99,34,1,68]
var finalSort=sortex1.sort();
var finalSort1=sortex2.sort();
console.log(finalSort);
console.log(finalSort1);
// reversing an array
var finalreverse=sortex2.reverse();
console.log(finalreverse);

// Testing element an array

// every
let testing=[20,44,58]
let isEven= testing.every(function(value){
    return value %2==0
});
console.log("isEven: "+ isEven);
// some
let testing1=[20,33,44,58]
let isOdd = testing1.some(function(value){
    return value %2==1
});
console.log("isOdd: "+ isOdd);

//Testing element an array(reference types)
let items=[
    {id:1,item:"mobile",isDeliverable:true},
    {id:2,item:"tv",isDeliverable:true},
    {id:3,item:"fan",isDeliverable:false}
]
let karthi = items.some(function(val){
return val.isDeliverable ==true;
})
console.log("isDeliverable:"+ karthi);

let items1=[
    {id:1,item:"mobile",isDeliverable:true},
    {id:2,item:"tv",isDeliverable:true},
    {id:3,item:"fan",isDeliverable:false}
]
let karthi1 = items1.every(function(val){
return val.isDeliverable ==true;
})
console.log("isDeliverable:"+ karthi1);





// Map method -->map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.

let people=[
    {id:1,firstName:"Sree",lastName:"Gokul"},
    {id:2,firstName:"NR",lastName:"Gokul"},
    {id:3,firstName:"KK",lastName:"Karthi"},
    {id:4,firstName:"Gokul",lastName:"Ramanan"}
]
let final = people.map(function(value){
let fullName= [value.firstName , value.lastName].join(" ")
let object={id:value.id,fullName}
return object;
});
console.log(final);

//Reduce Method :
let number=[11,22,33,44,55,66,77,88,99] //normal array in reduce method
let result = number.reduce(function(frtValue,currentValue){
return frtValue + currentValue
})
console.log(result);

// reference type array in reduce method
let shoppingMart=[
    {id:1,item:"eggs",price:4.50},
    {id:2,item:"kit kat",price:70},
    {id:3,item:"sugar",price:45}
]
let result1 = shoppingMart.reduce(function(frtValue,currentValue){
return frtValue + currentValue.price
},0)
console.log(result1);
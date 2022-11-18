
window.alert("IT'S MAYBE HARMFULL PLEASE BE CAREFULL MACHI");
console.log("WELCOME MACHI IVALOO THAN JAVASCRIPT DON'T WORRY");

//objects
var person = { firstName :"sree",age : 23, gender : "male", sibilans : {brother:"udhaya",sister:"nathiya"} } 
console.log(person.sibilans.brother);

//array
var frvcolors = ["GREEN","BLUE","ORANGE"]
console.log(frvcolors[0]);
console.log(frvcolors[2]);

//FUNCTIONS
function add(num1,num2)
{
console.log(num1+num2);
console.log(num1-num2);
console.log(num1%num2);
}
add(10,15)

//arithematic operators
var x = 10;
var y = 20;
var z = x+y;
console.log(x++);
console.log(x);

//assignment operators
var x = 55;
 x += 1
console.log(x);

//ternary operators
var age = 23;
var result = age > 18 ? "Adult":"Child"
console.log(result);

//LOGICAL OPERATORS
var income = true;
var propertValue = false;
var eligiable = income && propertValue;
var application = ! eligiable;
console.log("status: " + eligiable);
console.log("Application status: " + application);

//logical operators with boolean values
var sreeColor = "blue" ;
var mythiliColor = "Green";
var currentColor = sreeColor || mythiliColor;
console.log("SelectedColor: " + currentColor);

//OPERATORS PRECEDANCE
var x = 3 + 7 * 10;
console.log(x);
//other way
var x = (3+7)*10;
console.log(x);
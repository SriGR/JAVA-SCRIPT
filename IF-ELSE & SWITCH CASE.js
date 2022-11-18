//IF-ELSE CONDITION:
let hrs = new Date();
let hours = hrs.getHours();
if(hours >= 0 && hours <=12)
{
    console.log("GOOD MORNING");
}
else if(hours>= 13 && hours<=17)
{
    console.log("GOOD AFTERNOON");
}
else{console.log("GOOD NIGHT");}

//SWITCH-CASE:
let mark=90
switch(true){
    case(mark>90):
    console.log("ALL THE BEST - YOU HAVE SUPER GRADE BUDDY");
    break;
    case(mark>60):
    console.log("ALL THE BEST - YOU HAVE GOOD MARKS BUDDY");
    break;
    case(mark>40):
    console.log("BETTER LUCK NEXT TIME - YOU ARE JUST PASS");
    break;
    case(mark>10):
    console.log("DO HARD WORK - YOU GOT FAIL");
    break;
    default:
        console.log("UNKNOWN VALUES");
}
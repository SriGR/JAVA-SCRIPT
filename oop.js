// OOP -> OOP stands for object oriented programming.
// A procedural programming is about writting proedural or methods to perform operaions on the data.
// while opp is creating object that contain both data & methods .

// when function is created inside object that's called method.

// advantages --> faster,easier to excute,it's gives clear structure for programs.


let person={
    name:"sree",
    age:24,
    location:"salem",
    interest:["learning-codings"],
    intro: function(){
        var msg = `my name is ${this.name}, i am coming from ${this.location},i love to ${this.interest}`
    console.log(msg);
    }
}
person.intro();
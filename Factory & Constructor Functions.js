// Factory Function : 
function person(name,location){
    return{
        name:name,
        location,
        interest:['learning-codings'],
        intro(){
            var msg = `my name is ${this.name}, i am coming from ${this.location},i love to ${this.interest}`
        console.log(msg);
    }
};
}
var sree = person("sree","salem");
sree.intro();
var NR = person("NR gokul","kolathur");
NR.intro();
var karthi = person("karthi","kabilarmalai");
karthi.intro();

// Constructor Function :
function person1(name,location){
    this.name=name,
    this.location=location,
    this.intro = function () {
        var msg = `my name is ${this.name}, i am coming from ${this.location},i love to ${this.interest}`;
        console.log(msg);
    };
}
var person2 = new person1("sree","erode");
person2.intro();
var person3 = new person1("Gokul Ramanan","erode");
person3.intro();
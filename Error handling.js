// Error handling --> it's catch runtime error using try-catch-finnaly block.
let student = {
    firstName : "Sree",
    lastName : "Karthi",
    get fullName(){
       return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        if(typeof value != "string"){
            let err = new Error("it is not a string");
            throw err;
        }
        let final = value.split(" ");
        this.firstName = final[0];
        this.lastName = final[1] ?? "";
        return final;
    }
}
try {
    student.fullName=33; 
} catch (s) {
    alert(s);
}

console.log(student.fullName);



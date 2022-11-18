// Getter --> it used to get data at function
// Setter --> it used to set data at function

let student = {
    firstName : "Sree",
    lastName : "Gokul",
    get fullName(){
       return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        let final = value.split(" ");
        this.firstName = final[0];
        this.lastName = final[1] ?? "";
        return final;
    }
}
student.fullName="NR Gokul";
// student.fullName="karthi";

console.log(student.fullName);



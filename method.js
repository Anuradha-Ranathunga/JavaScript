let student= {
    firstName: "Saman" ,
    lastName : "Gunasekara",
    age : 45,
    fullName : function(){
        return this.firstName + " " + this.lastName;
        //return 1+3;
    } 
}
console.log(student.fullName());
// this -> function owner (eg. student)
//method => object ekak athule function ekak thiyena awastha

/*
===    both of the value and data type are same
==     only value is same
!==    both of the value and data type are different 
!=     only value is different 
*/
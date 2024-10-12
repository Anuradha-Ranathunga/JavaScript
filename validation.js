function validation(){
    let phone = document.getElementById("num").value;
    let numLength = phone.length;
    let firstNum = phone.substr(0,2);
    let lastNum = phone.substr(phone.length-9,9);
    let number;

    if(numLength<9){
        alert("Numbers missing! Please check again...");
        document.getElementById("msg").innerHTML="Invalid Number";
    } else if (numLength==9){
        alert("Number Validation Successful!");
        number = "94" + phone;
        document.getElementById("msg").innerHTML=number;
    } else if (numLength==10){
        alert("Number Validation Successful!");
        number = "94" + lastNum;
        document.getElementById("msg").innerHTML= number;
    } else if(numLength>11){
        alert("Invalid Number! Please check again...");
        document.getElementById("msg").innerHTML="Invalid Number";
    } else if(numLength ==11 && firstNum != 94){
        alert("Invalid Number! Please check again...");
        document.getElementById("msg").innerHTML="Invalid Number";
    } else if (numLength ==11 && firstNum == 94){
        alert("Number Validation Successful!");
        number = phone;
        document.getElementById("msg").innerHTML= number;       
    } else {
        alert("Invalid Number! Please check again...");
        document.getElementById("msg").innerHTML="Invalid Number"; 
    }
}
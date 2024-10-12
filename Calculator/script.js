function f0(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 0;
}

function f1(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 1;
}

function f2(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 2;
}

function f3(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 3;
}

function f4(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 4;
}

function f5(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 5;
}

function f6(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 6;
}

function f7(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 7;
}

function f8(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 8;
}

function f9(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 9;
}

function fEraser(){
    let previous = document.getElementById("display").innerHTML;
    let erasedPre = previous.slice(0,-1);
    document.getElementById("display").innerHTML = erasedPre;
}

let oper;
let firstSave; 

function fnADD(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= 0;
    oper = 1;
}

function fnMN(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= 0;
    oper = 2;
}

function fnML(){
   firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= 0;
    oper = 3;
}

function fnDV(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= 0;
    oper = 4;
}

function fnEQ(){
    let secondSave = document.getElementById("display").innerHTML;
    if (oper == 1){
        document.getElementById("display").innerHTML = parseInt(firstSave) + parseInt(secondSave);
    }else if (oper == 2){
        document.getElementById("display").innerHTML = parseInt(firstSave) - parseInt(secondSave);
    }else if (oper == 3){
        document.getElementById("display").innerHTML = parseInt(firstSave) * parseInt(secondSave);
    }else if (oper == 4){
        document.getElementById("display").innerHTML = parseInt(firstSave) / parseInt(secondSave);
    }else {
        document.getElementById("display").innerHTML = "Invalid";
    }
}

function fnAC(){
    document.getElementById("display").innerHTML = 0;
    firstSave = 0;
    secondSave = 0;
    oper = 0;
}

console.log("Hello World");
// //This is comment

// /* This is a multi line comment
// This is 1st line
// This is 2nd line
// This is 3rd line */

// var x =3;
// console.log(x)

// x= 5;
// console.log(x)

// x= x+1;
// console.log(x)

// x++;
// console.log(x)

// ++x;
// console.log(x)

// const c=3;
// //c= 6;
// console.log(c)         

// let d= 7;
// console.log(d)

// const e = 6;
// console.log(e)

// var x = 5;
// let y = 8;
// let sum = x + y;
// console.log(sum)

// x= 7*6;
// console.log(x)

    function changeText() {
        document.getElementById('test').style.fontWeight='bold'; 
        document.getElementById('test').style.color='red';

        document.getElementById('demo').style.display='block';

    }

    function addNumbers(){
        let firNum = parseFloat(document.getElementById("fnum").value);
        let secNum = parseFloat(document.getElementById("snum").value);
        let answer = firNum + secNum ; 
        console.log(answer)
        document.getElementById("finalAnswer").innerHTML = "Answer is " +answer
    }

    function parameters(x , y , z){
        return x * y + z;
    }
    
    let p = parameters(2,10,5);
    console.log(p);
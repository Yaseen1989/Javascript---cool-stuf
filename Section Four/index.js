// function findBiggestNumber(){
//     a>b ? console.log("a: ", a) : console.log("b: ", b) //Iternary operator 
// }

// //Note1 : Writing javascript code in order is very important, you can see a and be declared and assigned a value before we called the function, if we runt the function now, every think will work fine.
// var a = 3/4;
// var b = 5/6;

// findBiggestNumber();

//Note2 : Here you can see a and be declared and assigned a value after we called the function, if we runt the function now, the function will breake.
// var a = 3/4;
// var b = 5/6;


//-------------------------------------------------------------//


//Or we can write the funbction like this :

function findBiggestNumber(a, b){
    a>b ? console.log("a: ", a) : console.log("b: ", b) //Iternary operator 
}

var a = 3/4;
var b = 5/6;

findBiggestNumber(a, b);
var p_name='amar';
var pin = 77418;
var is_married=false;

console.log(typeof p_name);
console.log(typeof pin);
console.log(typeof is_married);
console.log('=======================');


var age=null;
console.log(typeof age);

var address =  
console.log(typeof address);
console.log('=======================');

function name(arg1 , arg2){
console.log(arg1 , arg2)
}

console.log('-----------NAME-----------');
function name(arg1,arg2){
    console.log(arg1,arg2);
}
name('Amar','Patil')

function swap_values(arg1, arg2){
    console.log("========== Before swap ==========");
    console.log(arg1, arg2);
    console.log("========= After swap ========");
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(arg1, arg2);
}
swap_values("sachin", "Anjali");
swap_values(1000, 2000);

console.log("========== three number addition ==========");
function addition(arg1, arg2, arg3){
    console.log(arg1 + arg2 + arg3);
}
addition(10.23, 600, 40);
addition("Hello ", "Good ", "Evening ");

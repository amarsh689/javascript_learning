var  square=function(arg1){
    console.log(arg1*arg1);    
}
console.log( 'Square of 5 :');
square(5)
console.log('Square of 6 : ');
square(6);
console.log('Square of 25 : ');
square(25);
console.log('square of 100 : ') ;
square(100)

console.log('==========================');
console.log('Function Type :');
console.log(typeof square);
console.log('==========================');


var test= function(arg1, arg2, result){
    console.log('Area of triangle :');
result = 1/2 * arg1* arg2;
return result;  
}
var area_of_triangle=test(45,34);
console.log(area_of_triangle);
console.log('==========================');


var test= function(arg1, arg2, result){
    console.log('Area of triangle :');
result = arg1* arg2;
return result;  
}
var area_of_rectangle=test(499,917);
console.log(area_of_rectangle);
console.log('==========================');

var swap_values=function(arg1,arg2){
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log('Before Swap:', arg1, arg2);
    console.log('After Swap:' ,arg2, arg1);
}

swap_values('Sachin', 'Anjali');
swap_values(1000,2000)
console.log('==========================');




var Stringuse="Javascript is the most popular language"

console.log('Total Characters Available in The String:');
var length=Stringuse.length;
console.log(length);
console.log('==========================');

console.log('The Index Of Character S :');
console.log(Stringuse.indexOf('s'));
console.log('==========================');

console.log('The Index Of String of Language:');
console.log(Stringuse.indexOf('Lang'));
console.log('==========================');

console.log('Last character of String');
console.log(Stringuse.charAt(Stringuse.length-1));
console.log('==========================');
console.log('Thirdlast character of String');
console.log(Stringuse.charAt(Stringuse.length-3));
console.log('==========================');
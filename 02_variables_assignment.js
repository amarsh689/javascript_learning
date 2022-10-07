var sweety = 'Sweety';
var cutie = 'Cutie';
console.log('Before Swap');
console.log(sweety,cutie);

var temp = 'Sweety';
sweety=cutie;
cutie=temp;
console.log('After Swap');
console.log(sweety, cutie);

var n1='100';
var n2='200';
var n3='300';
console.log('Values Before Swap');
console.log(n1,n2,n3);

var temp='100';
n1=n2;
n1=temp;
console.log('Values After Swap');
console.log('a)', n1,n2);

var temp='200';
n2=n3;
n2=temp;
console.log('b)',n2,n3);

var temp='300';
n3=n1;
n3=temp;
console.log('c )',n3,n1);

